import { RegisterPageObject } from '../pageObjects/userPageObject/RegisterPageObject';
import { LoginPageObject } from '../pageObjects/userPageObject/LoginPageObject';
import { CheckoutPageObject } from '../pageObjects/checkoutPageObject/CheckoutPageObject';

exports.POM_Management = class POM_Management {

  constructor(page) {
    this.page = page;
    this.registerPageObject = new RegisterPageObject(this.page);
    this.loginPageObject = new LoginPageObject(this.page);
    this.checkoutPageObject = new CheckoutPageObject(this.page);
  }

  getRegisterPage() {
    return this.registerPageObject;
  }

  getLoginPage() {
    return this.loginPageObject;
  }

  getCheckoutPage() {
    return this.checkoutPageObject;
  }
}
