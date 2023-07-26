const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');
const { CommonUtils } = require('../../utils/CommonUtils');

test.describe('all case pay in cash', () => {
    let pom_manager;
    let checkoutPage;
    let message_success;

    test.beforeEach(async ({ page }) => {
        pom_manager = new POM_Management(page);
        checkoutPage = pom_manager.getCheckoutPage();
        // await checkoutPage.gotoCheckoutPage("Tester", "a123456789");
        message_success = page.locator("//div[contains(text(),'Checkout success.')]");
    });

    test.only('TC_01', async ({ page }) => {
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

    test.afterEach(async () => {
        await new CommonUtils().waitForSomeTime(5);
    });
});