const { expect, test } = require('@playwright/test');

test('all case setting payment method', async ({ page }) => {
  await page.goto('https://landing.getrichpos.com/login');
  await page.getByLabel('Username').fill('Tester');
  await page.getByLabel('Password').fill('a123456789');
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('link', { name: 'Business Settings Business Settings' }).click();
  await page.getByLabel('Number 1').fill('R');
  await page.getByLabel('Number 2').fill('!');
  await page.getByLabel('Number 3').fill('C');
  await page.getByLabel('Number 4').fill('H');
  await page.getByText('Configure payment methods which are supported when checkout.').click();
  await page.locator('.MuiSwitch-input').first().check();
  await page.locator('.MuiSwitch-input').first().uncheck();
  await page.getByRole('button', { name: 'Update' }).click();
  await expect(page.locator("//div[contains(text(),'Update Payment method success.')]")).toHaveText('Update Payment method success.');
  await page.getByRole('link', { name: 'Checkout Checkout' }).click();
  await page.locator("//p[contains(text(),'Staff_01')]").first().click();
  if (await page.locator("//button[contains(text(),'Select')]").first().isVisible()) {
    await page.locator("//button[contains(text(),'Select')]").first().click();
  }
  console.log("Check cash btn, credit btn, external btn, giftcard btn is not visiable");
  await expect(page.locator("//button[@data-test-id='btn-cash-payment']")).not.toBeVisible();
  await expect(page.locator("//button[@data-test-id='btn-credit-payment']")).not.toBeVisible();
  await expect(page.locator("//button[@data-test-id='btn-external-credit-card-payment']")).not.toBeVisible();
  await expect(page.locator("//button[@data-test-id='btn-giftcard-payment']")).not.toBeVisible();
});