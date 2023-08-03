const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test.describe('all payment setting cases', () => {
  let page, pom_manager, paymentsettingPage, account;

  test.beforeAll(async ({ browser }) => {
    account = JSON.parse(JSON.stringify(require('../../data/account_test.json')));

    page = await browser.newPage();
    pom_manager = new POM_Management(page);
    paymentsettingPage = pom_manager.getPaymentSettingPage();
    await paymentsettingPage.gotoPaymentPage(account.username, account.password);
  });

  test.skip('TC_01', async ({ page }) => {
    /*Description TC_01 : Turn on all payment thod and checkin in checkout role*/
    paymentsettingPage.TC_01();
  });

  test.afterAll(async () => {
    await page.close();
  });
});