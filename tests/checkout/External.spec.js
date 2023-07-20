const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test('Pay in external credit Card', async ({ page }) => {
    const pom_manager = new POM_Management(page);
    const checkoutPage = pom_manager.getCheckoutPage();
    await checkoutPage.gotoCheckoutPage("Tester", "a123456789");

    /* TC04 - Checkout when more than staff, more than one service and pay in external credit Card */
    await checkoutPage.TC04();

    /* TC05 - Checkout when a staff, more than one service, discount and pay in external credit Card */
    // await checkoutPage.TC05();

    /* TC06 - Checkout when more than staff, more than one service,discount and pay in external credit Card */
    // await checkoutPage.TC06();
});
