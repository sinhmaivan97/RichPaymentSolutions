import { test, expect } from '@playwright/test';
import { POM_Management } from '../../pageObjects/POM_Management';

test.describe('all transactions cases', () => {
    let page, pom_manager, transactionsPage, account;

    test.beforeAll(async ({ browser }) => {
        account = JSON.parse(JSON.stringify(require('../../data/account_test.json')));

        page = await browser.newPage();
        pom_manager = new POM_Management(page);
        transactionsPage = pom_manager.getTransactionsPage();
        await transactionsPage.gotoTransactionsPage(account.username, account.password);
    });

    test('TC_01', async ({ page }) => {

    });

    test.afterAll(async () => {
        await page.close();
    });
});