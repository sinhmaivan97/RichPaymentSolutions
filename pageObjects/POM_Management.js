const { RegisterPageObject } = require('../pageObjects/userPageObject/RegisterPageObject');
const { LoginPageObject } = require('../pageObjects/userPageObject/LoginPageObject');

exports.POM_Management = class POM_Management {

  constructor(page) {
    this.page = page;
    this.registerPageObject = new RegisterPageObject(this.page);
    this.loginPageObject = new LoginPageObject(this.page);
  }

  getRegisterPage() {
    return this.registerPageObject;
  }

  getLoginPage() {
    return this.loginPageObject;
  }
}
