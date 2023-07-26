const { test, expect } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');
const { CommonUtils } = require('../../utils/CommonUtils');

test.describe('all login cases', () => {
    let page, pom_manager, loginPage, correct, incorrect;
    let text_user, text_pass, text_incorrect_user_and_pass, btn_checkin;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        pom_manager = new POM_Management(page);
        loginPage = pom_manager.getLoginPage();
        await loginPage.gotoLoginPage();

        /* error messeage of login screen */
        text_user = page.locator("//div[@data-test-id='input-username']//following-sibling::p");
        text_pass = page.locator("//div[@data-test-id='input-password']//following-sibling::p");
        text_incorrect_user_and_pass = page.locator("//div[contains(text(),'Incorrect Username or Password')]");
        btn_checkin = page.locator("//button[contains(text(),'Check-in')]");

        correct = JSON.parse(JSON.stringify(require('../../data/correct_infor.json')));
        incorrect = JSON.parse(JSON.stringify(require('../../data/incorrect_infor.json')));
    });

    test('TC_01', async ({ page }) => {
        /* Description TC01 - Check validation when user does'nt enter all textbox */
        await loginPage.TC01_EmptyData();
        await expect(text_user).toHaveText('Username is required');
        await expect(text_pass).toHaveText('Password is required');
    });

    test('TC_02', async ({ page }) => {
        /* Description TC02 - Check validation when user does'nt username */
        await loginPage.TC02_BlankUserName(correct.password);
        await expect(text_user).toHaveText('Username is required');
    });

    test('TC_03', async ({ page }) => {
        /* Description TC03 - Check validation when user does'nt password */
        await loginPage.TC03_BlankPassword(correct.username);
        await expect(text_pass).toHaveText('Password is required');
    });

    test('TC_04', async ({ page }) => {
        /* Description TC04 - Check validation when user enters a password of at least 8 characters */
        await loginPage.TC04_PasswordLeast8Character(correct.username, incorrect.password);
        await expect(text_pass).toHaveText('Password must be at least 8 characters');
    });

    test('TC_05', async ({ page }) => {
        /* Description TC05 - Check validation when user logs in with an account that doesn't exist */
        await loginPage.TC05_AccountDontExist("AccountTestForTC05", "PasswordTestForTC05");
        await expect(text_incorrect_user_and_pass).toHaveText('Incorrect Username or Password');
    });

    test('TC_06', async ({ page }) => {
        /* Description TC06 - Check validation when user corectly input all txb */
        await loginPage.TC06_AccountCorrect(correct.username, correct.password);
        await expect(btn_checkin).toBeVisible();
    });

    test.afterEach(async () => {
        await new CommonUtils().waitForSomeTime(1);
    });

    test.afterAll(async () => {
        await page.close();
    });
});
