import { test, expect } from '@playwright/test';
import { POM_Management } from '../../pageObjects/POM_Management';

test.describe('all business detail cases', () => {
  let page, pom_manager, businessdetailPage, account, correct_infor;

  test.beforeAll(async ({ browser }) => {
    account = JSON.parse(JSON.stringify(require('../../data/account_test.json')));
    correct_infor = JSON.parse(JSON.stringify(require('../../data/correct_infor.json')));

    page = await browser.newPage();
    pom_manager = new POM_Management(page);
    businessdetailPage = pom_manager.getBusinessDetailPage();
    await businessdetailPage.gotoBusineePage(account.username, account.password);
  });

  test('TC_01', async ({ page }) => {
    /* Description TC_01 : Verify when user empties all textboxes*/
    businessdetailPage.TC_01("", "", "", "", "", "", "", "");
  });

  test('TC_02', async ({ page }) => {
    /* Description TC_02 : Verify when user enter incorrect all infor*/
    businessdetailPage.TC_02("", "123456", "qc@richpaymentsolutions*com", "", "", "", "", "");
  });

  test.skip('TC_03', async ({ page }) => {
    /* Description TC_03 : Verify when user enter correct all infor*/
    businessdetailPage.TC_03("nail, spa & beauty", correct_infor.phone_number, "qc@richpaymentsolutions.com",
      "8/1 Nguyen Huy Tuong", "Office lease", "Binh Thanh district", "Ho Chi Minh city", "500000");
  });

  // test.afterAll(async () => {
  //   await page.close();
  // });
});