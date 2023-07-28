const { expect } = require('@playwright/test');

exports.TransactionsPageObject = class TransactionsPageObject {
    constructor(page) {
        this.page = page;

        this.txb_username = page.locator("//div[@data-test-id='input-username']//following-sibling::div//input");
        this.txb_password = page.locator("//div[@data-test-id='input-password']//following-sibling::div//input");

        this.btn_register = page.locator("//button[contains(text(),'Login')]");
        this.btn_report = page.locator("//ul[@data-test-id='report-route']");
        this.btn_transactions = page.locator("//p[contains(text(),'Transactions')]");

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

    async gotoTransactionsPage(username, password) {
        console.log("Go to applications");
        await this.page.goto(this.server.DOMAIN);

        console.log("Enter user name : " + username);
        await this.txb_username.fill(username);

        console.log("Enter password : " + password);
        await this.txb_password.fill(password);

        console.log("Click to register button");
        await this.btn_register.click();

        console.log("Click to business button and enter pass code");
        await this.btn_report.click();
        await this.enterPasscode();
        await this.btn_transactions.click();
    }
}