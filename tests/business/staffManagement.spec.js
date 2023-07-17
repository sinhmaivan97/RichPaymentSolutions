const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

const correct_infor = JSON.parse(JSON.stringify(require('../../data/correct_infor.json')));

/* Initia correct data test for registration screen */
const user_correct = correct_infor.username;
const password_correct = correct_infor.password;

test('Staff Page', async ({ page }) => {
    await page.goto('https://landing.getrichpos.com/login');
    await page.getByLabel('Username').fill(user_correct);
    await page.getByLabel('Password').fill(password_correct);
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Business Settings Business Settings' }).click();
    await page.getByLabel('Number 1').fill('R');
    await page.getByLabel('Number 2').fill('!');
    await page.getByLabel('Number 3').fill('C');
    await page.getByLabel('Number 4').fill('H');
  });