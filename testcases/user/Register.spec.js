import { test, expect } from '@playwright/test';
import { CommonUtils } from '../../utils/CommonUtils';
import { POM_Management } from '../../pageObjects/POM_Management';

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
});

test('Check validation when user do not enter business name, phone number, confirm password and verify error', async () => {
	await registerPage.TC02_BlankField(user_correct, email_correct, password_correct)
});

test('Check validation when user enter invalid phonenumber and verify error', async () => {
	await registerPage.TC03_InvalidPhoneNumber(user_correct, business_correct, phonenumber_incorrect, email_correct, password_correct, confirmpassword_correct);
});

test('Check validation when user enter invalid email and verify error', async () => {
	await registerPage.TC04_InvalidEmail(user_correct, business_correct, phonenumber_correct, email_incorrect, password_correct, confirmpassword_correct);
});

test('Check validation when user enter invalid password and verify error', async () => {
	await registerPage.TC05_InvalidPassword(user_correct, business_correct, phonenumber_correct, email_correct, password_incorrect, confirmpassword_incorrect);
});

test('Check validation when user enter password and confirm password matching and verify error', async () => {
	await registerPage.TC06_PasswordAndConfirmPasswordNotMatching(user_correct, business_correct, phonenumber_correct, email_correct, password_correct, confirmpassword_incorrect);
});

test('Check validation when user enter valid information and verify error', async () => {
	await registerPage.TC07_ValidInformation(user_correct, business_correct, phonenumber_correct, email_correct, password_correct, confirmpassword_correct);
});

test('Check validation when user enter email already exist and verify error', async () => {
	await registerPage.TC08_EmailAlreadyExist(user_correct, business_correct, phonenumber_correct, email_correct, password_correct, confirmpassword_correct);
});

/*after each for testcase*/
test.afterEach(async () => {
	await new CommonUtils().waitForSomeTime(5);
});
