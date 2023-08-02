import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://business-settings.stage.devrpay.com/');
  await page.goto('https://business-settings.stage.devrpay.com/checkout');
  await page.goto('https://landing.stage.devrpay.com/login?from=https://business-settings.stage.devrpay.com');
  await page.goto('https://landing.stage.devrpay.com/login');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').press('CapsLock');
  await page.getByLabel('Username').fill('T');
  await page.getByLabel('Username').press('CapsLock');
  await page.getByLabel('Username').fill('Tester');
  await page.getByLabel('Username').press('Tab');
  await page.getByLabel('Password').fill('a123456789');
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('link', { name: 'Business Settings Business Settings' }).click();
  await page.getByLabel('Number 1').fill('R');
  await page.getByLabel('Number 2').fill('!');
  await page.getByLabel('Number 3').fill('C');
  await page.getByLabel('Number 4').fill('H');
  await page.getByText('Staff Management').click();
  await page.locator('div').filter({ hasText: /^Staff’s profile$/ }).click();
  await page.getByLabel('delete').nth(2).click();
});