import { test, expect } from '@playwright/test';
import { POM_Management } from '../../pageObjects/POM_Management';

test.describe('all pay in gift card cases', () => {
    let page, pom_manager, checkoutPage, message_success, add_giftcard_success, account;

    test.beforeAll(async ({ browser }) => {
        account = JSON.parse(JSON.stringify(require('../../data/account_test.json')));

        page = await browser.newPage();
        pom_manager = new POM_Management(page);
        checkoutPage = pom_manager.getCheckoutPage();
        await checkoutPage.gotoCheckoutPage(account.username, account.password);

        add_giftcard_success = page.locator("//div[contains(text(),'Add gift card successfully!')]");
        message_success = page.locator("//div[contains(text(),'Checkout success.')]");
    });

    test('TC_07', async ({ page }) => {
        /* Checkout when more than one staff, more than one service and pay in gift card */
        await checkoutPage.TC07();
        await expect(add_giftcard_success).toHaveText('Add gift card successfully!');
        await expect(message_success).toHaveText('Checkout success.');
    });

    test('TC_08', async ({ page }) => {
        /* Checkout when more than one staff, more than one service, discount and pay in gift card */
        await checkoutPage.TC08();
        await expect(add_giftcard_success).toHaveText('Add gift card successfully!');
        await expect(message_success).toHaveText('Checkout success.');
    });

    test.afterAll(async () => {
        await page.close();
    });
});
