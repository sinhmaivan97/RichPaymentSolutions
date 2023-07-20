const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test('Pay in cash', async ({ page }) => {
    const pom_manager = new POM_Management(page);
    const checkoutPage = pom_manager.getCheckoutPage();
    await checkoutPage.gotoCheckoutPage("Tester", "a123456789");

    /* TC01 - Checkout when more than staff, more than service and pay in cash*/
    await checkoutPage.TC01();

    /* TC02 - Checkout when a staff, more than one service, discount and pay in cash*/
    await checkoutPage.TC02();

    /* TC03 - Checkout when more than staff, more than service, discount and pay the cash*/
    await checkoutPage.TC03();
});
