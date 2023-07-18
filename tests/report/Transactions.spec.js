const { test, expect } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test('Transaction Page', async ({ page }) => {
    const pom_manager = new POM_Management(page);
    const transactionsPage = pom_manager.getTransactionsPage();
})