const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test('Checkout page', async ({ page }) => {
    const pom_manager = new POM_Management(page);
    const checkoutPage = pom_manager.getCheckoutPage();
    await checkoutPage.gotoCheckoutPage("richpos", "a12345678");
});