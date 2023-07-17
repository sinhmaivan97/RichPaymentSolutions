const { test, expect } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

const correct_infor = JSON.parse(JSON.stringify(require('../../data/correct_infor.json')));
const incorrect_infor = JSON.parse(JSON.stringify(require('../../data/incorrect_infor.json')));

/* Initia correct data test for registration screen */
const user_correct = correct_infor.username;
const password_correct = correct_infor.password;

/* Initia incorrect data test for registration screen */
const user_incorrect = incorrect_infor.username;
const password_incorrect = incorrect_infor.password;

test('Login page', async ({ page }) => {
    const pom_manager = new POM_Management(page);
    const loginPage = pom_manager.getLoginPage();
    await loginPage.gotoLoginPage();

    /* error messeage of login screen */
    const text_user = page.locator("//div[@data-test-id='input-username']//following-sibling::p");
    const text_pass = page.locator("//div[@data-test-id='input-password']//following-sibling::p");
    const text_incorrect_user_and_pass = page.locator("//div[contains(text(),'Incorrect Username or Password')]");
    const btn_checkin = page.locator("//button[contains(text(),'Check-in')]");

    /* TC01 - Check validation when user does'nt enter all textbox */
    await loginPage.TC01_EmptyData();
    await expect(text_user).toHaveText('Username is required');
    await expect(text_pass).toHaveText('Password is required');

    /* TC02 - Check validation when user does'nt username */
    await loginPage.TC02_BlankUserName(password_correct);
    await expect(text_user).toHaveText('Username is required');

    /* TC03 - Check validation when user does'nt password */
    await loginPage.TC03_BlankPassword(user_correct);
    await expect(text_pass).toHaveText('Password is required');

    /* TC04 - Check validation when user enters a password of at least 8 characters */
    await loginPage.TC04_PasswordLeast8Character(user_correct, password_incorrect);
    await expect(text_pass).toHaveText('Password must be at least 8 characters');

    /* TC05 - Check validation when user logs in with an account that doesn't exist */
    await loginPage.TC05_AccountDontExist("AccountTestForTC05", "PasswordTestForTC05");
    await expect(text_incorrect_user_and_pass).toHaveText('Incorrect Username or Password');

    /* TC06 - Check validation when user corectly input all txb */
    await loginPage.TC06_AccountCorrect(user_correct, password_correct);
    await expect(btn_checkin).toBeVisible();
});
