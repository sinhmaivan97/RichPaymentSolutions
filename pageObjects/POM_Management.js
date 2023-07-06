const { RegisterPageObject } = require("./RegisterPageObject");

class POM_Management {
  constructor(page) {
    this.page = page;
    this.registerPageObject = new RegisterPageObject(this.page);
  }


  getRegisterPage() {
    return this.registerPageObject;
  }
}

module.exports = { POM_Management };
