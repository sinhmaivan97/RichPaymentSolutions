const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

const correct_infor = JSON.parse(JSON.stringify(require('../../data/correct_infor.json')));

/* Initia correct data test for registration screen */
const user_correct = correct_infor.username;
const password_correct = correct_infor.password;

test('Checkout page', async ({ page }) => {
    const pom_manager = new POM_Management(page);
    const checkoutPage = pom_manager.getCheckoutPage();
    await checkoutPage.gotoCheckoutPage(user_correct, password_correct);

});