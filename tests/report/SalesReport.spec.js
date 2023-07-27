const { test, expect } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test.describe('all sales report cases', () => {
    let page, pom_manager, salesreportPage, account;

    test.beforeAll(async ({ browser }) => {
        account = JSON.parse(JSON.stringify(require('../../data/account_test.json')));

        page = await browser.newPage();
        pom_manager = new POM_Management(page);
        salesreportPage = pom_manager.getSalesReportPage();
        await salesreportPage.gotoSalesReportPage(account.username, account.password);
    });

    test('TC_01', async ({ page }) => {

    });

    test.afterAll(async () => {
        await page.close();
    });
});