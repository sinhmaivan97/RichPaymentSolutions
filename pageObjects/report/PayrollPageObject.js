const { expect } = require('@playwright/test');

exports.PayrollPageObject = class PayrollPageObject {
    constructor(page) {
        this.page = page;

        this.txb_username = page.locator("//div[@data-test-id='input-username']//following-sibling::div//input");
        this.txb_password = page.locator("//div[@data-test-id='input-password']//following-sibling::div//input");

        this.btn_register = page.locator("//button[contains(text(),'Login')]");
        this.btn_report = page.locator("//ul[@data-test-id='report-route']");
        this.btn_payroll = page.locator("//p[contains(text(),'Payroll')]");

        this.input_1 = page.getByLabel('Number 1');
        this.input_2 = page.getByLabel('Number 2');
        this.input_3 = page.getByLabel('Number 3');
        this.input_4 = page.getByLabel('Number 4');

        this.server = JSON.parse(JSON.stringify(require('../../data/server.json')));
    }

    /* common function */

    async enterPasscode() {
        console.log("Enter pass code ");
        await this.input_1.fill('R');
        await this.input_2.fill('!');
        await this.input_3.fill('C');
        await this.input_4.fill('H');
    }

    async gotoPayrollPage(username, password) {
        console.log("Go to applications");
        await this.page.goto(this.server.STAG);

        console.log("Enter user name : " + username);
        await this.txb_username.fill(username);

        console.log("Enter password : " + password);
        await this.txb_password.fill(password);

        console.log("Click to register button");
        await this.btn_register.click();

        console.log("Click to business button and enter pass code");
        await this.btn_report.click();
        await this.enterPasscode();
        await this.btn_payroll.click();
    }
}