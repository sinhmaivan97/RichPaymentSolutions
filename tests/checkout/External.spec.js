const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test.describe('all pay in external card cases', () => {
    let page, pom_manager, checkoutPage, message_success, account;

    test.beforeAll(async ({ browser }) => {
        account = JSON.parse(JSON.stringify(require('../../data/account_test.json')));

        page = await browser.newPage();
        pom_manager = new POM_Management(page);
        checkoutPage = pom_manager.getCheckoutPage();
        await checkoutPage.gotoCheckoutPage(account.username, account.password);

        message_success = page.locator("//div[contains(text(),'Checkout success.')]");
    });

    test('TC_04', async ({ page }) => {
        /* TC04 - Checkout when more than staff, more than one service and pay in external credit Card */
        await checkoutPage.TC04();
        await expect(message_success).toHaveText('Checkout success.');
    });

    test('TC_05', async ({ page }) => {
        /* TC05 - Checkout when a staff, more than one service, discount and pay in external credit Card */
        await checkoutPage.TC05();
        await expect(message_success).toHaveText('Checkout success.');
    });

    test('TC_06', async ({ page }) => {
        /* TC06 - Checkout when more than staff, more than one service,discount and pay in external credit Card */
        await checkoutPage.TC06();
        await expect(message_success).toHaveText('Checkout success.');
    });

    test.afterAll(async () => {
        await page.close();
    });
});
