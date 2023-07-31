const { expect } = require('@playwright/test');

exports.CheckoutPageObject = class CheckoutPageObject {
    constructor(page) {
        this.page = page;

        this.txb_username = page.locator("//div[@data-test-id='input-username']//following-sibling::div//input");
        this.txb_password = page.locator("//div[@data-test-id='input-password']//following-sibling::div//input");
        this.txb_enter_giftcard = page.locator("//input[@id='outlined-basic']");
        this.input_number_card = page.locator("//input[@id='outlined-basic']");

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
        this.btn_select = page.locator("//button[contains(text(),'Select')]");
        this.btn_merge = page.locator("//button[contains(text(),'Merge')]");

        this.checkbox_prinf_confirm = page.locator("//label[@data-test-id='nonet-option']//span//input");

        this.server = JSON.parse(JSON.stringify(require('../../data/server.json')));
        this.account = JSON.parse(JSON.stringify(require('../../data/account_test.json')));
    }

    /* common function */
    async gotoCheckoutPage(username, password) {
        console.log("Go to applications");
        await this.page.goto(this.server.DOMAIN);

        console.log("Enter user name : " + username);
        await this.txb_username.fill(username);

        console.log("Enter password : " + password);
        await this.txb_password.fill(password);

        console.log("Click to register button");
        await this.btn_register.click();
    }

    async enterPasscode() {
        console.log("Enter pass code: R!CH");
        await this.page.getByLabel('Number 1').fill('R');
        await this.page.getByLabel('Number 2').fill('!');
        await this.page.getByLabel('Number 3').fill('C');
        await this.page.getByLabel('Number 4').fill('H');
    }

    async staffandservice01() {
        console.log("Choose staff 1 and select services for it");
        await this.btn_staff1.click();
        if (await this.btn_select.first().isVisible()) {
            await this.btn_select.first().click();
        }
        await this.btn_service1.first().click();
        if (await this.btn_save.isVisible()) {
            await this.btn_save.click();
        }
        await this.btn_service2.first().click();
    }

    async staffandservice02() {
        console.log("Choose staff 2 and select services for it");
        await this.btn_staff2.click();
        if (await this.btn_merge.first().isVisible()) {
            await this.btn_merge.first().click();
        }
        await this.btn_service3.first().click();
        await this.btn_service4.first().click();
    }

    /* test case function */
    async TC01() {
        console.log("1 - Checkout when more than staff, more than service and pay in cash");
        await this.staffandservice01();
        await this.btn_add_staff.click();
        await this.staffandservice02();
        await this.btn_cash.click();
        await this.btn_quick_cash.click();
        await this.btn_payment_cash.click();
        if (await this.checkbox_prinf_confirm.isVisible()) {
            await this.checkbox_prinf_confirm.click();
        }
    }

    async TC02(page) {
        console.log("2 - Checkout when a staff, more than one service, discount and pay in cash");
        await this.staffandservice02();
        await this.btn_discount.click();
        await this.btn_discount_percent.click();
        await this.btn_save.click();
        await this.btn_cash.click();
        await this.btn_quick_cash.click();
        await this.btn_payment_cash.click();
        if (await this.checkbox_prinf_confirm.isVisible()) {
            await this.checkbox_prinf_confirm.click();
        }
    }

    async TC03() {
        console.log("3 - Checkout when more than staff, more than service, discount and pay the cash");
        await this.staffandservice01();
        await this.btn_add_staff.click();
        await this.staffandservice02();
        await this.btn_discount.click();
        await this.btn_discount_percent.click();
        await this.btn_save.click();
        await this.btn_cash.click();
        await this.btn_quick_cash.click();
        await this.btn_payment_cash.click();
        if (await this.checkbox_prinf_confirm.isVisible()) {
            await this.checkbox_prinf_confirm.click();
        }
    }

    async TC04() {
        console.log("4 - Checkout when more than staff, more than one service and pay in external credit Card");
        await this.staffandservice01();
        await this.btn_add_staff.click();
        await this.staffandservice02();
        await this.btn_external_credit_card.click();
        await this.enterPasscode();
        await this.input_number_card.fill(this.account.EXTERNAL_CARD_ID);
        await this.btn_payment_cash.click();
        if (await this.checkbox_prinf_confirm.isVisible()) {
            await this.checkbox_prinf_confirm.click();
        }
    }

    async TC05() {
        console.log("5 - Checkout when a staff, more than one service, discount and pay in external credit Card");
        await this.staffandservice01();
        await this.btn_discount.click();
        await this.btn_discount_percent.click();
        await this.btn_save.click();
        await this.btn_external_credit_card.click();
        await this.enterPasscode();
        await this.input_number_card.fill(this.account.EXTERNAL_CARD_ID);
        await this.btn_payment_cash.click();
        if (await this.checkbox_prinf_confirm.isVisible()) {
            await this.checkbox_prinf_confirm.click();
        }
    }

    async TC06() {
        console.log("6 - Checkout when more than staff, more than one service,discount and pay in external credit Card");
        await this.staffandservice01();
        await this.btn_add_staff.click();
        await this.staffandservice02();
        await this.btn_discount.click();
        await this.btn_discount_percent.click();
        await this.btn_save.click();
        await this.btn_external_credit_card.click();
        await this.enterPasscode();
        await this.input_number_card.fill(this.account.EXTERNAL_CARD_ID);
        await this.btn_payment_cash.click();
        if (await this.checkbox_prinf_confirm.isVisible()) {
            await this.checkbox_prinf_confirm.click();
        }
    }

    async TC07() {
        console.log("7 - Checkout when more than one staff, more than one service and pay in gift card");
        await this.staffandservice01();
        await this.btn_add_staff.click();
        await this.staffandservice02();
        await this.btn_giftcard.click();
        await this.txb_enter_giftcard.fill(this.account.GIFT_CARD_ID);
        await this.btn_payment_giftcard.click();
        await this.btn_done_giftcard.click();
    }

    async TC08() {
        console.log("8 - Checkout when more than one staff, more than one service, discount and pay in gift card");
        await this.staffandservice01();
        await this.btn_add_staff.click();
        await this.staffandservice02();
        await this.btn_discount.click();
        await this.btn_discount_percent.click();
        await this.btn_save.click();
        await this.btn_giftcard.click();
        await this.txb_enter_giftcard.fill(this.account.GIFT_CARD_ID);
        await this.btn_payment_giftcard.click();
        await this.btn_done_giftcard.click();
    }
}
