const { expect } = require('@playwright/test');

exports.CheckoutPageObject = class CheckoutPageObject {
    constructor(page) {
        this.page = page;

        this.txb_username = page.locator("//div[@data-test-id='input-username']//following-sibling::div//input");
        this.txb_password = page.locator("//div[@data-test-id='input-password']//following-sibling::div//input");
        this.txb_enter_giftcard = page.locator("//input[@id='outlined-basic']");

        this.checkbox_prinf_confirm = page.locator("//label[@data-test-id='nonet-option']");

        this.btn_register = page.locator("//button[contains(text(),'Login')]");
        this.btn_add_staff = page.locator("//button[@data-test-id='btn-add-staff']");
        this.btn_staff1 = page.locator("//p[contains(text(),'Staff_01')]");
        this.btn_staff2 = page.locator("//p[contains(text(),'Staff_02')]");
        this.btn_service1 = page.locator("//p[contains(text(),'economy_01')]");
        this.btn_service2 = page.locator("//p[contains(text(),'economy_02')]");
        this.btn_service3 = page.locator("//p[contains(text(),'business_01')]");
        this.btn_service4 = page.locator("//p[contains(text(),'luxury_01')]");
        this.btn_cash = page.locator("//button[@data-test-id='btn-cash-payment']");
        this.btn_external_credit_card = page.locator("//button[@data-test-id='btn-external-credit-card-payment']");
        this.btn_giftcard = page.locator("//button[@data-test-id='btn-giftcard-payment']");
        this.btn_discount = page.locator("//button[contains(text(),'Discount')]");
        this.btn_discount_percent = page.locator("//button[contains(text(),'15')]");
        this.btn_save = page.locator("//button[@data-test-id='btn-save-discount']");
        this.btn_quick_cash = page.locator("//button[@data-test-id='current-total-cash']");
        this.btn_payment_cash = page.locator("//button[@data-test-id='btn-payment']");
        this.btn_payment_credit = page.locator("//button[contains(text(),'Payment')]");
        this.btn_confirm = page.locator("//button[contains(text(),'Confirm')]");
        this.btn_payment_giftcard = page.locator("//button[contains(text(),'Payment')]");
        this.btn_done_giftcard = page.locator("//button[contains(text(),'Done')]");

        this.input_1 = page.getByLabel('Number 1');
        this.input_2 = page.getByLabel('Number 2');
        this.input_3 = page.getByLabel('Number 3');
        this.input_4 = page.getByLabel('Number 4');

        this.message_success = page.locator("//div[contains(text(),'Checkout success.')]");
        this.message_error = page.locator("//div[contains(text(),'Can not connect to device')]");
    }

    /* common function */

    async gotoCheckoutPage(username, password) {
        const applicationURL = "https://landing.stage.devrpay.com/login";

        console.log("Go to applications : " + applicationURL);
        await this.page.goto(applicationURL);

        console.log("Enter user name : " + username);
        await this.txb_username.fill(username);

        console.log("Enter password : " + password);
        await this.txb_password.fill(password);

        console.log("Click to register button");
        await this.btn_register.click();
    }

    async enterPasscode() {
        await this.input_1.fill('R');
        await this.input_2.fill('!');
        await this.input_3.fill('C');
        await this.input_4.fill('H');
    }

    async staffandservice01() {
        await this.btn_staff1.click();
        await this.btn_service1.click();
        await this.btn_service2.click();
    }

    async staffandservice02() {
        await this.btn_staff2.click();
        await this.btn_service3.click();
        await this.btn_service4.click();
    }

    /*test case function*/

    async TC01() {
        console.log("----------------------------------");
        console.log("Checkout when more than staff, more than service and pay in cash");
        await this.staffandservice01();
        await this.btn_add_staff.click();
        await this.staffandservice02();
        await this.btn_cash.click();
        await this.btn_quick_cash.click();
        await this.btn_payment_cash.click();
        await this.checkbox_prinf_confirm.click();
        await this.btn_confirm.click();
        await expect(message_success).toBeVisible();
    }

    async TC02() {
        console.log("----------------------------------");
        console.log("Checkout when a staff, more than one service, discount and pay in cash");
        await this.staffandservice01();
        await this.btn_discount.click();
        await this.btn_discount_percent.click();
        await this.btn_save.click();
        await this.btn_cash.click();
        await this.btn_quick_cash.click();
        await this.btn_payment_cash.click();
        await this.checkbox_prinf_confirm.click();
        await this.btn_confirm.click();
        await expect(message_success).toBeVisible();
    }

    async TC03() {
        console.log("----------------------------------");
        console.log("Checkout when more than staff, more than service, discount and pay the cash");
        await this.staffandservice01();
        await this.btn_add_staff.click();
        await this.staffandservice02();
        await this.btn_discount.click();
        await this.btn_discount_percent.click();
        await this.btn_save.click();
        await this.btn_cash.click();
        await this.btn_quick_cash.click();
        await this.btn_payment_cash.click();
        await this.checkbox_prinf_confirm.click();
        await this.btn_confirm.click();
        await expect(message_success).toBeVisible();
    }

    async TC04() {
        console.log("----------------------------------");
        console.log("Checkout when more than staff, more than one service and pay in external credit Card");
        await this.staffandservice01();
        await this.btn_add_staff.click();
        await this.staffandservice02();
        await this.btn_external_credit_card.click();
        await this.enterPasscode();
    }

    async TC05() {
        console.log("----------------------------------");
        console.log("Checkout when a staff, more than one service, discount and pay in external credit Card");
        await this.staffandservice01();
        await this.btn_discount.click();
        await this.btn_discount_percent.click();
        await this.btn_save.click();
        await this.btn_external_credit_card.click();
        await this.enterPasscode();
    }

    async TC06() {
        console.log("----------------------------------");
        console.log("Checkout when more than staff, more than one service,discount and pay in external credit Card");
        await this.staffandservice01();
        await this.btn_add_staff.click();
        await this.staffandservice02();
        await this.btn_discount.click();
        await this.btn_discount_percent.click();
        await this.btn_save.click();
        await this.btn_external_credit_card.click();
        await this.enterPasscode();
    }

    async TC07() {
        console.log("----------------------------------");
        console.log("Checkout when more than one staff, more than one service and pay in gift card");
        await this.staffandservice01();
        await this.btn_add_staff.click();
        await this.staffandservice02();
        await this.btn_giftcard.click();
        await this.txb_enter_giftcard.fill("929292");
        await this.btn_payment_giftcard.click();
        await this.btn_done_giftcard.click();
        await expect(message_success).toBeVisible();
    }

    async TC08() {
        console.log("----------------------------------");
        console.log("Checkout when more than one staff, more than one service, discount and pay in gift card");
        await this.staffandservice01();
        await this.btn_add_staff.click();
        await this.staffandservice02();
        await this.btn_discount.click();
        await this.btn_discount_percent.click();
        await this.btn_save.click();
        await this.btn_giftcard.click();
        await this.txb_enter_giftcard.fill("929292");
        await this.btn_payment_giftcard.click();
        await this.btn_done_giftcard.click();
        await expect(message_success).toBeVisible();
    }
}