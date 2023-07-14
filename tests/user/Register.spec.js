const { test, expect } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

const correct_infor = JSON.parse(JSON.stringify(require('../../data/correct_infor.json')));
const incorrect_infor = JSON.parse(JSON.stringify(require('../../data/incorrect_infor.json')));

/* Initia correct data test for registration screen */
const user_correct = correct_infor.username;
const business_correct = correct_infor.business_name;
const phonenumber_correct = correct_infor.phone_number;
const email_correct = correct_infor.email_address;
const password_correct = correct_infor.password;
const confirmpassword_correct = correct_infor.confirm_password;

/* Initia incorrect data test for registration screen */
const phonenumber_incorrect = incorrect_infor.phone_number;
const email_incorrect = incorrect_infor.email_address;
const password_incorrect = incorrect_infor.password;
const confirmpassword_incorrect = incorrect_infor.confirm_password;

test('Register page', async ({ page }) => {
	const pom_manager = new POM_Management(page);
	const registerPage = pom_manager.getRegisterPage();
	await registerPage.gotoApplication();

	/* error message of register screen */
	const text_user = page.locator("//p[contains(text(),'Username is required')]");
	const text_business = page.locator("//p[contains(text(),'Business name is required')]");
	const text_phonenumber = page.locator("//div[@data-test-id='input-bussiness-phone']//following-sibling::p");
	const text_email = page.locator("//div[@data-test-id='input-email']//following-sibling::p");
	const text_pass = page.locator("//div[@data-test-id='input-password']//following-sibling::p");
	const text_confirm_pass = page.locator("//div[@data-test-id='input-confirm']//following-sibling::p");
	const success_message = page.locator("//div[contains(text(),'Sign up successfully!')]");
	const already_exist_account_message = page.locator("//div[contains(text(),'User already existed')]");

	/* TC01 - Check validation when user do not enter all textbox and verify error */
	await registerPage.TC01_EmptyData();
	await expect(text_user).toHaveText('Username is required');
	await expect(text_business).toHaveText('Business name is required');
	await expect(text_phonenumber).toHaveText('Phone number is required');
	await expect(text_email).toHaveText('Email is required');
	await expect(text_pass).toHaveText('This field cannot be blank');
	await expect(text_confirm_pass).toHaveText('Password is required');

	/* TC02 - Check validation when user do not enter business name, phone number, confirm password and verify error */
	await registerPage.TC02_BlankField(user_correct, email_correct, password_correct);
	await expect(text_business).toHaveText('Business name is required');
	await expect(text_phonenumber).toHaveText('Phone number is required');
	await expect(text_confirm_pass).toHaveText('Password is required');

	/* TC03 - Check validation when user enter invalid phonenumber and verify error */
	await registerPage.TC03_InvalidPhoneNumber(user_correct, business_correct, phonenumber_incorrect, email_correct, password_correct, confirmpassword_correct);
	await expect(text_phonenumber).toHaveText('Invalid phone number.');

	/* TC04 - Check validation when user enter invalid email and verify error */
	await registerPage.TC04_InvalidEmail(user_correct, business_correct, phonenumber_correct, email_incorrect, password_correct, confirmpassword_correct);
	await expect(text_email).toHaveText('Email is not valid.');

	/* TC05 - Check validation when user enter invalid password and verify error */
	await registerPage.TC05_InvalidPassword(user_correct, business_correct, phonenumber_correct, email_correct, password_incorrect, confirmpassword_incorrect);
	await expect(text_pass).toHaveText('Password is too short - should be 8 chars minimum.');

	/* TC06 - Check validation when user enter password and confirm password matching and verify error */
	await registerPage.TC06_PasswordAndConfirmPasswordNotMatching(user_correct, business_correct, phonenumber_correct, email_correct, password_correct, confirmpassword_incorrect);
	await expect(text_confirm_pass).toHaveText('Confirm password does not matching with password');

	/* TC07 - Check validation when user enter valid information and verify error */
	await registerPage.TC07_ValidInformation(user_correct, business_correct, phonenumber_correct, email_correct, password_correct, confirmpassword_correct);
	await expect(success_message).toHaveText('Sign up successfully!');

	/* TC08 - Check validation when user enter email already exist and verify error */
	await registerPage.clickSignupBtn();
	await registerPage.TC08_EmailAlreadyExist(user_correct, business_correct, phonenumber_correct, email_correct, password_correct, confirmpassword_correct);
	await expect(already_exist_account_message).toHaveText('User already existed');
});
