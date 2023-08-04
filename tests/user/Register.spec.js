import { test, expect } from '@playwright/test';
import { POM_Management } from '../../pageObjects/POM_Management';

test.describe('all register cases', () => {
	let page, pom_manager, registerPage, correct, incorrect;
	let text_user, text_business, text_phonenumber, text_email, text_pass, text_confirm_pass, success_message, already_exist_account_message;

	test.beforeAll(async ({ browser }) => {
		page = await browser.newPage();
		pom_manager = new POM_Management(page);
		registerPage = pom_manager.getRegisterPage();
		await registerPage.gotoApplication();

		/* error message of register screen */
		text_user = page.locator("//p[contains(text(),'Username is required')]");
		text_business = page.locator("//p[contains(text(),'Business name is required')]");
		text_phonenumber = page.locator("//div[@data-test-id='input-bussiness-phone']//following-sibling::p");
		text_email = page.locator("//div[@data-test-id='input-email']//following-sibling::p");
		text_pass = page.locator("//div[@data-test-id='input-password']//following-sibling::p");
		text_confirm_pass = page.locator("//div[@data-test-id='input-confirm']//following-sibling::p");
		success_message = page.locator("//div[contains(text(),'Sign up successfully!')]");
		already_exist_account_message = page.locator("//div[contains(text(),'User already existed')]");

		correct = JSON.parse(JSON.stringify(require('../../data/correct_infor.json')));
		incorrect = JSON.parse(JSON.stringify(require('../../data/incorrect_infor.json')));
	});

	test('TC_01', async ({ page }) => {
		/* Description TC01 - Check validation when user do not enter all textbox and verify error */
		await registerPage.TC01_EmptyData();
		await expect(text_user).toHaveText('Username is required');
		await expect(text_business).toHaveText('Business name is required');
		await expect(text_phonenumber).toHaveText('Phone number is required');
		await expect(text_email).toHaveText('Email is required');
		await expect(text_pass).toHaveText('This field cannot be blank');
		await expect(text_confirm_pass).toHaveText('Password is required');
	});

	test('TC_02', async ({ page }) => {
		/* Description TC02 - Check validation when user do not enter business name, phone number, confirm password and verify error */
		await registerPage.TC02_BlankField(correct.username, correct.email_address, correct.password);
		await expect(text_business).toHaveText('Business name is required');
		await expect(text_phonenumber).toHaveText('Phone number is required');
		await expect(text_confirm_pass).toHaveText('Password is required');
	});

	test('TC_03', async ({ page }) => {
		/* Description TC03 - Check validation when user enter invalid phonenumber and verify error */
		await registerPage.TC03_InvalidPhoneNumber(correct.username, correct.business_name, incorrect.phone_number, correct.email_address, correct.password, correct.confirm_password);
		await expect(text_phonenumber).toHaveText('Invalid phone number.');
	});

	test('TC_04', async ({ page }) => {
		/* Description TC04 - Check validation when user enter invalid email and verify error */
		await registerPage.TC04_InvalidEmail(correct.username, correct.business_name, correct.phone_number, incorrect.email_address, correct.password, correct.confirm_password);
		await expect(text_email).toHaveText('Email is not valid.');
	});

	test('TC_05', async ({ page }) => {
		/* Description TC05 - Check validation when user enter invalid password and verify error */
		await registerPage.TC05_InvalidPassword(correct.username, correct.business_name, correct.phone_number, correct.email_address, incorrect.password, incorrect.confirm_password);
		await expect(text_pass).toHaveText('Password is too short - should be 8 chars minimum.');
	});

	test('TC_06', async ({ page }) => {
		/* Description TC06 - Check validation when user enter password and confirm password matching and verify error */
		await registerPage.TC06_PasswordAndConfirmPasswordNotMatching(correct.username, correct.business_name, correct.phone_number, correct.email_address, correct.password, incorrect.confirm_password);
		await expect(text_confirm_pass).toHaveText('Confirm password does not matching with password');
	});

	test('TC_07', async ({ page }) => {
		/* Description TC07 - Check validation when user enter valid information and verify error */
		await registerPage.TC07_ValidInformation(correct.username, correct.business_name, correct.phone_number, correct.email_address, correct.password, correct.confirm_password);
		await expect(success_message).toHaveText('Sign up successfully!');
	});

	test('TC_08', async ({ page }) => {
		/* Description TC08 - Check validation when user enter email already exist and verify error */
		await registerPage.clickSignupBtn();
		await registerPage.TC08_EmailAlreadyExist(correct.username, correct.business_name, correct.phone_number, correct.email_address, correct.password, correct.confirm_password);
		await expect(already_exist_account_message).toHaveText('User already existed');
	});

	test.afterAll(async () => {
		await page.close();
	});
});
