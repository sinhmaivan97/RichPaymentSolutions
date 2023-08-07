import { test, expect } from '@playwright/test';

exports.BusinessDetailPageObject = class BusinessDetailPageObject {
    constructor(page) {
        this.page = page;

        this.txb_username = page.locator("//div[@data-test-id='input-username']//following-sibling::div//input");
        this.txb_password = page.locator("//div[@data-test-id='input-password']//following-sibling::div//input");
        this.txb_business_name = page.locator("//label[contains(text(),'Business Name (*)')]//following-sibling::div//input");
        this.txb_business_phone = page.locator("//label[contains(text(),'Business Phone (*)')]//following-sibling::div//input");
        this.txb_email_address = page.locator("//label[contains(text(),'Email Address')]//following-sibling::div//input");
        this.txb_address_1 = page.locator("//label[contains(text(),'Address line 1')]//following-sibling::div//input");
        this.txb_address_2 = page.locator("//label[contains(text(),'Address line 2')]//following-sibling::div//input");
        this.txb_town_city = page.locator("//label[contains(text(),'Town / City')]//following-sibling::div//input");
        this.txb_state_provice = page.locator("//label[contains(text(),'State / Province')]//following-sibling::div//input");
        this.txb_zip_code = page.locator("//label[contains(text(),'Zip / Postal code')]//following-sibling::div//input");

        this.btn_register = page.locator("//button[contains(text(),'Login')]");
        this.btn_business = page.getByRole('link', { name: 'Business Settings Business Settings' });
        this.btn_business_detail = page.getByText('Business Detail');
        this.btn_update = page.getByText('Update');

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

    async gotoBusineePage(username, password) {
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

        await this.btn_business_detail.click();
    }

    async TC_01(name, phone, email, address1, address2, town, province, zipcode) {
        console.log("Verify when user empties all textboxes");

        console.log("Enter business name : " + name);
        this.txb_business_name.fill(name);

        console.log("Enter business phone : " + phone);
        this.txb_business_phone.fill(phone);

        console.log("Enter email address : " + email);
        this.txb_email_address.fill(email);

        console.log("Enter address 1 : " + address1);
        this.txb_address_1.fill(address1);

        console.log("Enter email address 2 : " + address2);
        this.txb_address_2.fill(address2);

        console.log("Enter town : " + town);
        this.txb_town_city.fill(town);

        console.log("Enter province : " + province);
        this.txb_state_provice.fill(province);

        console.log("Enter zip code : " + zipcode);
        this.txb_zip_code.fill(zipcode);

        console.log("Click to update button");
        this.btn_update.click();
    }

    async TC_02(name, phone, email, address1, address2, town, province, zipcode) {
        console.log("Verify when user enter incorrect all infor");

        console.log("Enter incorrect business name : " + name);
        this.txb_business_name.fill(name);

        console.log("Enter incorrect business phone : " + phone);
        this.txb_business_phone.fill(phone);

        console.log("Enter incorrect email address : " + email);
        this.txb_email_address.fill(email);

        console.log("Enter incorrect address 1 : " + address1);
        this.txb_address_1.fill(address1);

        console.log("Enter incorrect email address 2 : " + address2);
        this.txb_address_2.fill(address2);

        console.log("Enter incorrect town : " + town);
        this.txb_town_city.fill(town);

        console.log("Enter incorrect province : " + province);
        this.txb_state_provice.fill(province);

        console.log("Enter incorrect zip code : " + zipcode);
        this.txb_zip_code.fill(zipcode);

        console.log("Click to update button");
        this.btn_update.click();
    }

    async TC_03(name, phone, email, address1, address2, town, province, zipcode) {
        console.log("Verify when user enter correct all infor");

        console.log("Enter correct business name : " + name);
        this.txb_business_name.fill(name);

        console.log("Enter correct business phone : " + phone);
        this.txb_business_phone.fill(phone);

        console.log("Enter correct email address : " + email);
        this.txb_email_address.fill(email);

        console.log("Enter correct address 1 : " + address1);
        this.txb_address_1.fill(address1);

        console.log("Enter correct email address 2 : " + address2);
        this.txb_address_2.fill(address2);

        console.log("Enter correct town : " + town);
        this.txb_town_city.fill(town);

        console.log("Enter correct province : " + province);
        this.txb_state_provice.fill(province);

        console.log("Enter correct zip code : " + zipcode);
        this.txb_zip_code.fill(zipcode);

        console.log("Click to update button");
        this.btn_update.click();
    }
}