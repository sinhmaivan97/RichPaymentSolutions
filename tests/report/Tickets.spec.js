const { test, expect } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test('Tickets Page', async ({ page }) => {
    const pom_manager = new POM_Management(page);
    const ticketsPage = pom_manager.getTicketsPage();
    await ticketsPage.gotoTicketPage("Tester", "a123456789");
});