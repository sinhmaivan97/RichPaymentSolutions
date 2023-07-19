const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test('Pay in credit', async ({ page }) => {
    const pom_manager = new POM_Management(page);
    const checkoutPage = pom_manager.getCheckoutPage();
    await checkoutPage.gotoCheckoutPage("Tester", "a123456789");

    /* message error/ success */
    const message_success = page.locator("//div[contains(text(),'Checkout success.')]");
    const message_error = page.locator("//div[contains(text(),'Can not connect to device')]");

    /* TC04 - Checkout when more than staff, more than one service and pay in credit */
    await checkoutPage.TC04();
    await expect(message_error).toBeVisible();

    /* TC05 - Checkout when a staff, more than one service, discount and pay in credit */
    // await checkoutPage.TC05();
    // await expect(message_error).toBeVisible();

    /* TC06 - Checkout when more than staff, more than one service,discount and pay in credit */
    // await checkoutPage.TC06();
    // await expect(message_error).toBeVisible();
});
