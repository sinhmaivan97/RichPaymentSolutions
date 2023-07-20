const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test('Pay in giftcard', async ({ page }) => {
    const pom_manager = new POM_Management(page);
    const checkoutPage = pom_manager.getCheckoutPage();
    await checkoutPage.gotoCheckoutPage("Tester", "a123456789");

    /* Checkout when more than one staff, more than one service and pay in gift card */
    await checkoutPage.TC07();

    /* Checkout when more than one staff, more than one service, discount and pay in gift card */
    // await checkoutPage.TC08();
});
