const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test.describe('all pay in cash cases', () => {
    let page, pom_manager, checkoutPage, message_success, account, btn_select;

    test.beforeAll(async ({ browser }) => {
        account = JSON.parse(JSON.stringify(require('../../data/account_test.json')));

        page = await browser.newPage();
        pom_manager = new POM_Management(page);
        checkoutPage = pom_manager.getCheckoutPage();
        await checkoutPage.gotoCheckoutPage(account.username, account.password);

        message_success = page.locator("//div[contains(text(),'Checkout success.')]");
    });

    test('TC_01', async ({ page }) => {
        /* Description TC01 - Checkout when more than staff, more than service and pay in cash*/
        await checkoutPage.TC01();
        await expect(message_success).toHaveText('Checkout success.');
    });

    test('TC_02', async ({ page }) => {
        /* Description TC02 - Checkout when a staff, more than one service, discount and pay in cash*/
        await checkoutPage.TC02();
        await expect(message_success).toHaveText('Checkout success.');
    });

    test('TC_03', async ({ page }) => {
        /* Description TC03 - Checkout when more than staff, more than service, discount and pay the cash*/
        await checkoutPage.TC03();
        await expect(message_success).toHaveText('Checkout success.');
    });

    test.afterAll(async () => {
        await page.close();
    });
});