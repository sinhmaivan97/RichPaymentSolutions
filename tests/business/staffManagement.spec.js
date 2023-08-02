const { expect, test } = require('@playwright/test');
const { POM_Management } = require('../../pageObjects/POM_Management');

test.describe('all staff page cases', () => {
  let page, pom_manager, staffPage, account, correct_infor, incorrect_infor;
  let error_name, error_email, error_phone, error_passcode, add_success_message, update_success_message, delete_success_message;

  test.beforeAll(async ({ browser }) => {
    account = JSON.parse(JSON.stringify(require('../../data/account_test.json')));
    correct_infor = JSON.parse(JSON.stringify(require('../../data/correct_infor.json')));
    incorrect_infor = JSON.parse(JSON.stringify(require('../../data/incorrect_infor.json')));

    page = await browser.newPage();
    pom_manager = new POM_Management(page);
    staffPage = pom_manager.getStaffManagementPage();
    await staffPage.gotoStaffPage(account.username, account.password);

    error_name = page.locator("//p[contains(text(),'This field cannot be blank')]");
    error_email = page.locator("//p[contains(text(),'Email is not valid.')]");
    error_phone = page.locator("//p[contains(text(),'Invalid phone number.')]");
    error_passcode = page.locator("//p[contains(text(),'Please enter 4 numbers for the passcode')]");
    add_success_message = page.locator("//div[contains(text(),'Create staff success')]");
    update_success_message = page.locator("//div[contains(text(),'Update staff success')]");
    delete_success_message = page.locator("//div[contains(text(),'Delete staff Account demo success')]");
  });

  test('TC_01', async ({ page }) => {
    /* Description TC01 - Verify addition new when user does not enter all data*/
    await staffPage.TC_01();
    await expect(error_name).toHaveText('This field cannot be blank');
  });

  test('TC_02', async ({ page }) => {
    /* Description TC02 - Verify addition new when user enters all incorrect data*/
    await staffPage.TC_02("", incorrect_infor.phone_number, incorrect_infor.email_address);
    await expect(error_name).toHaveText('This field cannot be blank');
    await expect(error_phone).toHaveText('Invalid phone number.');
    await expect(error_email).toHaveText('Email is not valid.')
  });

  test('TC_03', async ({ page }) => {
    /* Description TC03 - Verify addition new when user enters all correct data*/
    await staffPage.TC_03(correct_infor.username_for_bussiness, correct_infor.phone_number, correct_infor.email_address);
    await expect(add_success_message).toHaveText('Create staff success');
  });

  test('TC_04', async ({ page }) => {
    /* Description TC04 - Verify updates when user deletes all data*/
    await staffPage.TC_04("", "", "");
    await expect(error_name).toHaveText('This field cannot be blank');
  });

  test('TC_05', async ({ page }) => {
    /* Description TC05 - Verify updates when user enters all incorrect data*/
    await staffPage.TC_05("", incorrect_infor.phone_number, incorrect_infor.email_address);
    await expect(error_name).toHaveText('This field cannot be blank');
    await expect(error_phone).toHaveText('Invalid phone number.');
    await expect(error_email).toHaveText('Email is not valid.')
  });

  test('TC_06', async ({ page }) => {
    /* Description TC06 - Verify updates when user enters all correct data*/
    await staffPage.TC_06("1111111111", "emailfortest@gmail.com");
    await expect(update_success_message).toHaveText('Update staff success');
  });

  test.skip('TC_07', async ({ page }) => {
    /* Description TC07 - Verify updates when user updated commission role*/
    await staffPage.TC_07();
  });

  test('TC_08', async ({ page }) => {
    /* Description TC08 - Verify data when user deletes staff*/
    await staffPage.TC_08();
    await expect(delete_success_message).toHaveText('Delete staff Account demo success');
  });

  test.afterAll(async () => {
    await page.close();
  });
});