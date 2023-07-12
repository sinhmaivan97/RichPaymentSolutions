const { test, expect } = require('@playwright/test');
const { CommonUtils } = require('../../utils/CommonUtils');
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

	console.log('Check validation when user do not enter all textbox and verify error')
	await registerPage.TC01_EmptyData();

	console.log('Check validation when user do not enter business name, phone number, confirm password and verify error');
	await registerPage.TC02_BlankField(user_correct, email_correct, password_correct);

	console.log('Check validation when user enter invalid phonenumber and verify error');
	await registerPage.TC03_InvalidPhoneNumber(user_correct, business_correct, phonenumber_incorrect, email_correct, password_correct, confirmpassword_correct);

	console.log('Check validation when user enter invalid email and verify error');
	await registerPage.TC04_InvalidEmail(user_correct, business_correct, phonenumber_correct, email_incorrect, password_correct, confirmpassword_correct);

	console.log('Check validation when user enter invalid password and verify error');
	await registerPage.TC05_InvalidPassword(user_correct, business_correct, phonenumber_correct, email_correct, password_incorrect, confirmpassword_incorrect);

	console.log('Check validation when user enter password and confirm password matching and verify error');
	await registerPage.TC06_PasswordAndConfirmPasswordNotMatching(user_correct, business_correct, phonenumber_correct, email_correct, password_correct, confirmpassword_incorrect);

	console.log('Check validation when user enter valid information and verify error');
	await registerPage.TC07_ValidInformation(user_correct, business_correct, phonenumber_correct, email_correct, password_correct, confirmpassword_correct);

	console.log('Check validation when user enter email already exist and verify error');
	await registerPage.TC08_EmailAlreadyExist(user_correct, business_correct, phonenumber_correct, email_correct, password_correct, confirmpassword_correct);
});

test.afterEach(async () => {
	await new CommonUtils().waitForSomeTime(5);
});
