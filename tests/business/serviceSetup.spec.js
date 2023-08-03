const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test.describe('all service page cases', () => {
  let page, pom_manager, servicePage, account;
  let delete_category_success_message, update_category_success_message, account_test, add_category_success_message, add_product_success_message;

  test.beforeAll(async ({ browser }) => {
    account = JSON.parse(JSON.stringify(require('../../data/account_test.json')));

    page = await browser.newPage();
    pom_manager = new POM_Management(page);
    servicePage = pom_manager.getServicePage();
    await servicePage.gotoServicePage(account.username, account.password);

    account_test = JSON.parse(JSON.stringify(require('../../data/account_test.json')));
    add_category_success_message = page.locator("//div[contains(text(),'Create category success')]");
    add_product_success_message = page.locator("//div[contains(text(),'Create product success')]");
    update_category_success_message = page.locator("//div[contains(text(),'Update category success')]");
    delete_category_success_message = page.locator("//div[contains(text(),'Delete category success')]")
  });

  test('TC_01', async ({ page }) => {
    /*Description TC_01 : add category from list all services*/
    servicePage.TC_01(account_test.CategoryName);
    await expect(add_category_success_message).toHaveText("Create category success");
  });

  test('TC_02', async ({ page }) => {
    /*Description TC_02 : add servide to category*/
    servicePage.TC_02(account_test.ServiceName, account_test.PriceService);
    await expect(add_product_success_message).toHaveText("Create product success");
  });

  test('TC_03', async ({ page }) => {
    /*Description TC_03 : edit category from list all service*/
    servicePage.TC_03();
    await expect(update_category_success_message).toHaveText("Update category success");
  });

  test('TC_04', async ({ page }) => {
    /*Description TC_04 : delete category from list all service*/
    servicePage.TC_04();
    await expect(delete_category_success_message).toHaveText("Delete category success");
  });

  test.afterAll(async () => {
    await page.close();
  });
});