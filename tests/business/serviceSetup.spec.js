const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test('Service page', async ({ page }) => {
  const pom_manager = new POM_Management(page);
  const servicePage = pom_manager.getServicePage();
  await servicePage.gotoServicePage("richpos", "a12345678");
});