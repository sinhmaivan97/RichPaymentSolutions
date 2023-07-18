const { test, expect } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test('Sales report Page', async ({ page }) => {
    const pom_manager = new POM_Management(page);
    const salesreportPage = pom_manager.getSalesReportPage();
    await salesreportPage.gotoSalesReportPage("Tester", "a123456789");
});