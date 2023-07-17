const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test('Staff page', async ({ page }) => {
  const pom_manager = new POM_Management(page);
  const staffPage = pom_manager.getStaffManagementPage();
  await staffPage.gotoStaffPage("Tester", "a123456789");
});