import { test, expect } from '@playwright/test';
import { POM_Management } from '../../pageObjects/POM_Management';

test.describe('all admin setting cases', () => {
  let page, pom_manager, adminPage, account;

  test.beforeAll(async ({ browser }) => {
    account = JSON.parse(JSON.stringify(require('../../data/account_test.json')));

    page = await browser.newPage();
    pom_manager = new POM_Management(page);
    adminPage = pom_manager.getAdminSettingPage();
    await adminPage.gotoAdminPage(account.username, account.password);
  });

  test('TC_01', async ({ page }) => {

  });

  test.afterAll(async () => {
    await page.close();
  });
});