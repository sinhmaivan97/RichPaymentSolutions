import { RegisterPageObject } from '../pageObjects/userPageObject/RegisterPageObject';

exports.POM_Management = class POM_Management {
  constructor(page) {
    this.page = page;
    this.registerPageObject = new RegisterPageObject(this.page);
  }

  getRegisterPage() {
    return this.registerPageObject;
  }
}
