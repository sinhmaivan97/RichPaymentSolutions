import { test, expect } from '@playwright/test';
import { POM_Management } from '../../pageObjects/POM_Management';

test.describe('all payroll cases', () => {
    let page, pom_manager, payrollPage, account;

    test.beforeAll(async ({ browser }) => {
        account = JSON.parse(JSON.stringify(require('../../data/account_test.json')));

        page = await browser.newPage();
        pom_manager = new POM_Management(page);
        payrollPage = pom_manager.getPayrollPage();
        await payrollPage.gotoPayrollPage(account.username, account.password);
    });

    test('TC_01', async ({ page }) => {

    });

    test.afterAll(async () => {
        await page.close();
    });
});