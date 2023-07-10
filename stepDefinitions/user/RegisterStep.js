const {POM_Management} = require('../../pageObjects/POM_Management');

/*before each for testcase*/
test.beforeEach(async() => {
    await Given(/^User is on the register page$/, () => {
		return true;
	});
});

/* Conditions */
When(/^Check validation when user does'nt enter all textbox$/, () => {
	return true;
});

When(/^Check validation when user does'nt enter business name, phone number and confirm password$/, () => {
	return true;
});

When(/^Check validation when user enter invalid phonenumber$/, () => {
	return true;
});

When(/^Check validation when user enter invalid email$/, () => {
	return true;
});

When(/^Check validation when user enter invalid password$/, () => {
	return true;
});

When(/^Check validation when user enter password and confirm password matching$/, () => {
	return true;
});

When(/^Check validation when user enter valid information$/, () => {
	return true;
});

When(/^Check validation when user enter email already exist$/, () => {
	return true;
});

/* Action */

/* Input valid information */
When(/^Enter username <username>$/, () => {
	return true;
});

When(/^Enter business <business>$/, () => {
	return true;
});

When(/^Enter phone number <phone>$/, () => {
	return true;
});

When(/^Enter email address <email>$/, () => {
	return true;
});

When(/^Enter valid password <password>$/, () => {
	return true;
});

When(/^Enter confirm password <confirmpassword>$/, () => {
	return true;
});

/* Input invalid information */
When(/^Enter invalid phone number <phone>$/, () => {
	return true;
});

When(/^Enter invalid email address <email>$/, () => {
	return true;
});

When(/^Enter invalid password <password>$/, () => {
	return true;
});

When(/^Enter password and confirm password not matching <confirmpassword>$/, () => {
	return true;
});

When(/^Enter email address already exist <email>$/, () => {
	return true;
});

When(/^Click to Register Button$/, () => {
	return true;
});

/* Verify */
Then(/^Verify success message$/, () => {
	return true;
});

Then(/^Verify error message$/, () => {
	return true;
});

/*after each for testcase*/
test.afterEach(async() => {
    await new CommonUtils().waitForSomeTime(5);
});
