const { test, expect } = require('@playwright/test');
const { CommonUtils } = require('../../utils/CommonUtils');
const { POM_Management } = require('../../pageObjects/POM_Management');
const { JsonFormatter } = require('@cucumber/cucumber');

const correct_infor = JSON.parse(JSON.stringify(require('../../testDatas/correct_infor.json')));
const incorrect_infor = Json.parse(Json.stringify(require('../../testDatas/incorrect_infor.json')));

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

/* Initia register pageobject by POM_Management */
const pom_manager = new POM_Management(page);
const registerPage = pom_manager.getRegisterPage();

test.beforeEach(async () => {
	/* Open URL */
	await registerPage.gotoApplicationAndMoveSignUpPage();
});

test('Check validation when user do not enter all textbox and verify error', async () => {
	await registerPage.TC01_EmptyData();
	await expect(page.getByTestId(":r3:-helper-text")).toHaveText('Username is required');
	await expect(page.getByTestId(":r4:-helper-text")).toHaveText('Business name is required');
	await expect(page.getByTestId(":r5:-helper-text")).toHaveText('Phone number is required');
	await expect(page.getByTestId(":r6:-helper-text")).toHaveText('Email is required');
	await expect(page.getByTestId(":r7:-helper-text")).toHaveText('This field cannot be blank');
	await expect(page.getByTestId(":r8:-helper-text")).toHaveText('Password is required');
});

test('Check validation when user do not enter business name, phone number, confirm password and verify error', async () => {
	await registerPage.TC02_BlankField(user_correct, email_correct, password_correct)
	await expect(page.getByTestId(":r4:-helper-text")).toHaveText('Business name is required');
	await expect(page.getByTestId(":r5:-helper-text")).toHaveText('Phone number is required');
	await expect(page.getByTestId(":r7:-helper-text")).toHaveText('This field cannot be blank');
	await expect(page.getByTestId(":r8:-helper-text")).toHaveText('Confirm password does not matching with password');
});

test('Check validation when user enter invalid phonenumber and verify error', async () => {
	await registerPage.TC03_InvalidPhoneNumber(user_correct, business_correct, phonenumber_incorrect, email_correct, password_correct, confirmpassword_correct);
	await expect(page.getByTestId(":r5:-helper-text")).toHaveText('Invalid phone number.');
});

test('Check validation when user enter invalid email and verify error', async () => {
	await registerPage.TC04_InvalidEmail(user_correct, business_correct, phonenumber_correct, email_incorrect, password_correct, confirmpassword_correct);
	await expect(page.getByTestId(":r6:-helper-text")).toHaveText('Email is not valid.');
});

test('Check validation when user enter invalid password and verify error', async () => {
	await registerPage.TC05_InvalidPassword(user_correct, business_correct, phonenumber_correct, email_correct, password_incorrect, confirmpassword_incorrect);
	await expect(page.getByTestId(":r7:-helper-text")).toHaveText('Password is too short - should be 8 chars minimum.');
});

test('Check validation when user enter password and confirm password matching and verify error', async () => {
	await registerPage.TC06_PasswordAndConfirmPasswordNotMatching(user_correct, business_correct, phonenumber_correct, email_correct, password_correct, confirmpassword_incorrect);
	await expect(page.getByTestId(":r8:-helper-text")).toHaveText('Confirm password does not matching with password');
});

test('Check validation when user enter valid information and verify error', async () => {
	await registerPage.TC07_ValidInformation(user_correct, business_correct, phonenumber_correct, email_correct, password_correct, confirmpassword_correct);
	await expect(page.getByTestId("")).toHaveText('');
});

test('Check validation when user enter email already exist and verify error', async () => {
	await registerPage.TC08_EmailAlreadyExist(user_correct, business_correct, phonenumber_correct, email_correct, password_correct, confirmpassword_correct);
	await expect(page.locator('#2')).toHaveText('User already existed');
});

/*after each for testcase*/
test.afterEach(async () => {
	await new CommonUtils().waitForSomeTime(5);
});
