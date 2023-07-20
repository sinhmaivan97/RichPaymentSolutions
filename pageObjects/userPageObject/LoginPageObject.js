const { expect } = require('@playwright/test');

exports.LoginPageObject = class LoginPageObject {
    constructor(page) {
        this.page = page;

        this.txb_username = page.locator("//div[@data-test-id='input-username']//following-sibling::div//input");
        this.txb_password = page.locator("//div[@data-test-id='input-password']//following-sibling::div//input");
        
        this.btn_register = page.locator("//button[contains(text(),'Login')]");
    }

    async gotoLoginPage() {
        const applicationURL = "https://landing.stage.devrpay.com/login";

        console.log("Go to applications : " + applicationURL);
        await this.page.goto(applicationURL);
    }

    async TC01_EmptyData() {
        console.log("****************************************************");
        console.log("Check validation when user does'nt enter all textbox");
        await this.btn_register.click();
    }

    async TC02_BlankUserName(password) {
        console.log("****************************************************");
        console.log("Check validation when user does'nt username")

        console.log("Enter password: " + password);
        await this.txb_password.fill(password);

        console.log("Click to register button");
        await this.btn_register.click();
    }

    async TC03_BlankPassword(username) {
        console.log("****************************************************");
        console.log("Check validation when user does'nt password")

        console.log("Enter user name : " + username);
        await this.txb_username.fill(username);
        await this.txb_password.fill("");

        console.log("Click to register button");
        await this.btn_register.click();
    }

    async TC04_PasswordLeast8Character(username, password) {
        console.log("****************************************************");
        console.log("Check validation when user enters a password of at least 8 characters")

        console.log("Enter user name : " + username);
        await this.txb_username.fill(username);

        console.log("Enter invalid password : " + password);
        await this.txb_password.fill(password);

        console.log("Click to register button");
        await this.btn_register.click();
    }

    async TC05_AccountDontExist(username, password) {
        console.log("****************************************************");
        console.log("Check validation when user logs in with an account that doesn't exist");

        console.log("Enter user name dont exist : " + username);
        await this.txb_username.fill(username);

        console.log("Enter password : " + password);
        await this.txb_password.fill(password);

        console.log("Click to register button");
        await this.btn_register.click();
    }

    async TC06_AccountCorrect(username, password) {
        console.log("****************************************************");
        console.log("Check validation when user corectly input all txb");

        console.log("Enter user name : " + username);
        await this.txb_username.fill(username);

        console.log("Enter password : " + password);
        await this.txb_password.fill(password);

        console.log("Click to register button");
        await this.btn_register.click();
    }
}
