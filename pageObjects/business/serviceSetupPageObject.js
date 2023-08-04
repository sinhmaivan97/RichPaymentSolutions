import { test, expect } from '@playwright/test';

exports.ServiceSetupPageObject = class ServiceSetupPageObject {
    constructor(page) {
        this.page = page;

        this.txb_username = page.locator("//div[@data-test-id='input-username']//following-sibling::div//input");
        this.txb_password = page.locator("//div[@data-test-id='input-password']//following-sibling::div//input");
        this.txb_category_name = page.locator("//div[@data-test-id='input-category-name']//div//input");
        this.txb_service_name = page.locator("//div[@data-test-id='input-service-name']//div//input");
        this.txb_input_price = page.locator("//div[@data-test-id='input-price']//div//input");

        this.btn_register = page.locator("//button[contains(text(),'Login')]");
        this.btn_business = page.getByRole('link', { name: 'Business Settings Business Settings' });
        this.btn_service_setup = page.getByText('Service Setup');
        this.btn_add_category = page.locator("//button[contains(text(),'Add Category')]");
        this.btn_save_category = page.locator("//button[@data-test-id='btn-save-cat']");
        this.btn_add_service = page.locator("//button[@data-test-id='btn-add-service']");
        this.btn_save_service = page.locator("//button[@data-test-id='btn-save-service']");
        this.btn_ticket_staff = page.getByText('Category_Test');
        this.btn_more_cate = page.locator("//button[@aria-label='more-btn-cate']");
        this.btn_edit_cate = page.locator("//li[contains(text(),'Edit')]");
        this.btn_delet_cate = page.locator("//li[contains(text(),'Delete')]");
        this.btn_save_cate = page.locator("//button[@data-test-id='btn-save-cate']");
        this.btn_confirm_delete_cate = page.locator("//button[@data-test-id='btn-delete-cate']");

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

    async gotoServicePage(username, password) {
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

        await this.btn_service_setup.click();
    }

    async TC_01(name) {
        console.log("Add category from list all services");

        console.log("Click to add category btn");
        await this.btn_add_category.click();

        console.log("Input category name : " + name);
        await this.txb_category_name.fill(name);

        console.log("Click to save category btn");
        await this.btn_save_category.click();
    }

    async TC_02(name, price) {
        console.log("Add servide to category");

        console.log("Click ticket staff for add service");
        await this.btn_ticket_staff.first().click();

        console.log("Click to add service btn");
        await this.btn_add_service.click();

        console.log("Input service name : " + name);
        await this.txb_service_name.fill(name);

        console.log("Input price : " + price);
        await this.txb_input_price.fill(price);

        console.log("Click to btn save service");
        await this.btn_save_service.click();
    }

    async TC_03() {
        console.log("Edit category from list all service");

        console.log("Click to more cate");
        await this.btn_more_cate.nth(1).click();

        console.log("Click to edit button");
        await this.btn_edit_cate.click();

        console.log("Click to save cate button");
        await this.btn_save_cate.click();
    }

    async TC_04() {
        console.log("Delete category from list all service");

        console.log("Click to more cate");
        await this.btn_more_cate.nth(1).click();

        console.log("Click to edit button");
        await this.btn_delet_cate.click();

        console.log("Click to confirm delete category");
        await this.btn_confirm_delete_cate.click();
    }
}