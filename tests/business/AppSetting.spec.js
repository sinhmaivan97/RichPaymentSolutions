const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test.describe('all app setting cases', () => {
  let page, pom_manager, appSettingPage, account;

  test.beforeAll(async ({ browser }) => {
    account = JSON.parse(JSON.stringify(require('../../data/account_test.json')));

    page = await browser.newPage();
    pom_manager = new POM_Management(page);
    appSettingPage = pom_manager.getAppSettingPage();
    await appSettingPage.gotoAppPage(account.username, account.password);
  });

  test('TC_01', async ({ page }) => {

  });

  test.afterAll(async () => {
    await page.close();
  });
});