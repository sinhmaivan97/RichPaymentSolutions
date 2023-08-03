const { expect } = require('@playwright/test');

exports.StaffManagementPageObject = class StaffManagementPageObject {
    constructor(page) {
        this.page = page;

        this.txb_username = page.locator("//div[@data-test-id='input-username']//following-sibling::div//input");
        this.txb_password = page.locator("//div[@data-test-id='input-password']//following-sibling::div//input");

        this.btn_register = page.locator("//button[contains(text(),'Login')]");
        this.btn_business = page.getByRole('link', { name: 'Business Settings Business Settings' });
        this.btn_staff_manager = page.getByText('Staff Management');
        this.btn_staff_profile = page.locator("//p[contains(text(),'Staff’s profile')]");
        this.btn_add_staff = page.locator("//button[contains(text(),'Add')]");
        this.btn_save_staff = page.locator("//button[@type='submit']");
        this.btn_name = page.locator("//div//label[contains(text(),'Name (*)')]/following-sibling::div//input");
        this.btn_phone_number = page.locator("//div//label[contains(text(),'Phone Number')]/following-sibling::div//input");
        this.btn_email = page.locator("//div//label[contains(text(),'Email')]/following-sibling::div//input");
        this.passcode = page.locator("//div//label[contains(text(),'Passcode')]/following-sibling::div//input");
        this.btn_staff = page.getByText('Account demo');
        this.btn_update = page.getByText('Update');
        this.icon_delete = page.getByLabel('delete');
        this.btn_delete = page.locator("//button[contains(text(),'Delete')]");
        this.btn_commission = page.locator("//button[contains(text(),'Commission')]");
        this.btn_4060 = page.locator("//div[contains(text(),'40-60')]");
        this.btn_5050 = page.locator("//div[contains(text(),'50-50')]");

        this.server = JSON.parse(JSON.stringify(require('../../data/server.json')));
    }

    /* common function */

    async enterPasscode() {
        console.log("Enter pass code : R!CH ");
        await this.page.getByLabel('Number 1').fill('R');
        await this.page.getByLabel('Number 2').fill('!');
        await this.page.getByLabel('Number 3').fill('C');
        await this.page.getByLabel('Number 4').fill('H');
    }

    async gotoStaffPage(username, password) {
        console.log("Go to applications");
        await this.page.goto(this.server.DOMAIN);

        console.log("Enter user name : " + username);
        await this.txb_username.fill(username);

        console.log("Enter password : " + password);
        await this.txb_password.fill(password);

        console.log("Click to register button");
        await this.btn_register.click();

        console.log("Click to business button and enter pass code");
        await this.btn_business.click();
        await this.enterPasscode();

        await this.btn_staff_manager.click();
        await this.btn_staff_profile.click();
    }

    /* test case function */

    async TC_01() {
        console.log("Verify addition new when user does not enter all data");

        console.log("Click to btn add staff");
        await this.btn_add_staff.click();

        console.log("Click to btn save staff");
        await this.btn_save_staff.click();
    }

    async TC_02(name, phonenumber, email) {
        console.log("Verify addition new when user enters all incorrect data");

        console.log("Enter incorrect name : " + name);
        await this.btn_name.fill(name);

        console.log("Enter incorrect phone number : " + phonenumber);
        await this.btn_phone_number.fill(phonenumber);

        console.log("Enter incorrect email :" + email);
        await this.btn_email.fill(email);

        console.log("Click btn save");
        await this.btn_save_staff.click();
    }

    async TC_03(name, phonenumber, email) {
        console.log("Verify addition new when user enters all correct data");

        console.log("Enter correct name : " + name);
        await this.btn_name.fill(name);

        console.log("Enter correct phone number : " + phonenumber);
        await this.btn_phone_number.fill(phonenumber);

        console.log("Enter correct email :" + email);
        await this.btn_email.fill(email);

        console.log("Click btn save");
        await this.btn_save_staff.click();
    }

    async TC_04(name, phonenumber, email) {
        console.log("Verify updates when user deletes all data");

        console.log("Click staff button from the left menu")
        await this.btn_staff.first().click();

        console.log("Enter correct name : " + name);
        await this.btn_name.fill(name);

        console.log("Enter correct phone number : " + phonenumber);
        await this.btn_phone_number.fill(phonenumber);

        console.log("Enter correct email :" + email);
        await this.btn_email.fill(email);

        console.log("Click btn update");
        await this.btn_update.click();
    }

    async TC_05(name, phonenumber, email) {
        console.log("Verify updates when user enters all incorrect data");

        console.log("Enter incorrect name : " + name);
        await this.btn_name.fill(name);

        console.log("Enter incorrect phone number : " + phonenumber);
        await this.btn_phone_number.fill(phonenumber);

        console.log("Enter incorrect email :" + email);
        await this.btn_email.fill(email);

        console.log("Click btn update");
        await this.btn_update.click();
    }

    async TC_06(name, phonenumber, email) {
        console.log("Verify updates when user enters all correct data");

        console.log("Enter incorrect name : " + name);
        await this.btn_name.fill(name);

        console.log("Enter correct phone number : " + phonenumber);
        await this.btn_phone_number.fill(phonenumber);

        console.log("Enter correct email :" + email);
        await this.btn_email.fill(email);

        console.log("Click btn update");
        await this.btn_update.click();
    }

    async TC_07() {
        console.log("Verify updates when user updated commission role");

        console.log("Click commission role");
        await this.btn_commission.click();

        console.log("Click to check percentage for commission 40-60")
        await this.btn_4060.first().click();

        console.log("Click to check percentage for gratuity 50-50")
        await this.btn_5050.nth(1).click();

        console.log("Click btn update");
        await this.btn_update.nth(1).click();
    }

    async TC_08() {
        console.log("Verify data when user deletes staff");

        await this.icon_delete.nth(2).click();
        await this.btn_delete.click();
    }
}