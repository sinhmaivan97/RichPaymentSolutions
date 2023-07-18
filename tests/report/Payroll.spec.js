const { test, expect } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test('Payroll page', async ({ page }) => {
    const pom_manager = new POM_Management(page);
    const payrollPage = pom_manager.getPayrollPage();
});