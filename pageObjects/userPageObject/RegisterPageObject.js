class RegisterPageObject {
    
  constructor(page) {
    this.page = page;

    this.btn_signup = page.getByRole("button", { name: "Sign up" });
    this.txb_username = page.getByTestId(":r13:");
    this.txb_businessname = page.getByTestId(":r14:");
    this.txb_phonenumber = page.getByTestId(":r15:");
    this.txb_emailaddress = page.getByTestId(":r1̉:");
    this.txb_password = page.getByTestId(":r17:");
    this.txb_password = page.getByTestId(":r17:");
    this.txb_repeatpass = page.getByTestId(":r18:");
    this.btn_register = page.getByRole("button", { name: "Register" });

    this.msg_incorrect_username = page.getByTestId(":r1j:-helper-text");
    this.msg_incorrect_businessname = page.getByTestId(":r1k:-helper-text");
    this.msg_incorrect_phonenumber = page.getByTestId(":r1l:-helper-text");
    this.msg_incorrect_emailaddress = page.getByTestId(":r1m:-helper-text");
    this.msg_incorrect_password = page.getByTestId(":r1n:-helper-text");
    this.msg_incorrect_confirmpassword = page.getByTestId(":r1o:-helper-text");
  }

  async gotoApplicationAndMoveSignUpPage() {
    const applicationURL = "https://landing.getrichpos.com/login";

    console.log("Go to application: " + applicationURL);
    await this.page.goto(applicationURL);

    console.log("Click to Signup Button");
    await this.btn_signup.click();
  }

  async TC01_EmptyData() {
    // console.log("Check validation when user does'nt enter all textbox");
    await this.btn_register.click();
  }

  async TC02_BlankField(username, email, password) {
    // console.log("Check validation when user does'nt enter business name, phone number and confirm password");

    console.log("Enter username : " + username);
    await this.txb_username.fill(username);

    console.log("Enter email : " + email);
    await this.txb_emailaddress.fill(email);

    console.log("Enter password : " + password);
    await this.txb_password.fill(password);

    console.log("Click to Register Button");
    await this.btn_register.click();
  }

  async TC03_InvalidPhoneNumber(username,business,phone,email,password,confirmpassword) {
    // console.log("Check validation when user enter invalid phonenumber");

    console.log("Enter username : " + username);
    await this.txb_username.fill(username);

    console.log("Enter business : " + business);
    await this.txb_businessname.fill(business);

    console.log("Enter invalid phone number : " + phone);
    await this.txb_phonenumber.fill(phone);

    console.log("Enter email address : " + email);
    await this.txb_emailaddress(email);

    console.log("Enter password : " + password);
    await this.txb_password.fill(password);

    console.log("Enter confirm password : " + confirmpassword);
    await this.txb_repeatpass.fill(confirmpassword);

    console.log("Click to Register Button");
    await this.btn_register.click();
  }

  async TC04_InvalidEmail(username,business,phone,email,password,confirmpassword) {
    // console.log("Check validation when user enter invalid email");

    console.log("Enter username : " + username);
    await this.txb_username.fill(username);

    console.log("Enter business : " + business);
    await this.txb_businessname.fill(business);

    console.log("Enter phone number : " + phone);
    await this.txb_phonenumber.fill(phone);

    console.log("Enter invalid email address : " + email);
    await this.txb_emailaddress(email);

    console.log("Enter password : " + password);
    await this.txb_password.fill(password);

    console.log("Enter confirm password : " + confirmpassword);
    await this.txb_repeatpass.fill(confirmpassword);

    console.log("Click to Register Button");
    await this.btn_register.click();
  }

  async TC05_InvalidPassword(username,business,phone,email,password,confirmpassword) {
    // console.log("Check validation when user enter invalid password");

    console.log("Enter username : " + username);
    await this.txb_username.fill(username);

    console.log("Enter business : " + business);
    await this.txb_businessname.fill(business);

    console.log("Enter phone number : " + phone);
    await this.txb_phonenumber.fill(phone);

    console.log("Enter email address : " + email);
    await this.txb_emailaddress(email);

    console.log("Enter invalid password : " + password);
    await this.txb_password.fill(password);

    console.log("Enter confirm password : " + confirmpassword);
    await this.txb_repeatpass.fill(confirmpassword);

    console.log("Click to Register Button");
    await this.btn_register.click();
  }

  async TC06_PasswordAndConfirmPasswordNotMatching(username,business,phone,email,password,confirmpassword) {
    // console.log("Check validation when user enter password and confirm password matching");

    console.log("Enter username : " + username);
    await this.txb_username.fill(username);

    console.log("Enter business : " + business);
    await this.txb_businessname.fill(business);

    console.log("Enter phone number : " + phone);
    await this.txb_phonenumber.fill(phone);

    console.log("Enter email address : " + email);
    await this.txb_emailaddress(email);

    console.log("Enter password : " + password);
    await this.txb_password.fill(password);

    console.log("Enter password and confirm password not matching: " + confirmpassword);
    await this.txb_repeatpass.fill(confirmpassword);

    console.log("Click to Register Button");
    await this.btn_register.click();
  }

  async TC07_ValidInformation(username,business,phone,email,password,confirmpassword) {
    // console.log("Check validation when user enter valid information");

    console.log("Enter username : " + username);
    await this.txb_username.fill(username);

    console.log("Enter business : " + business);
    await this.txb_businessname.fill(business);

    console.log("Enter phone number : " + phone);
    await this.txb_phonenumber.fill(phone);

    console.log("Enter email address : " + email);
    await this.txb_emailaddress(email);

    console.log("Enter password : " + password);
    await this.txb_password.fill(password);

    console.log("Enter confirm password : " + confirmpassword);
    await this.txb_repeatpass.fill(confirmpassword);

    console.log("Click to Register Button");
    await this.btn_register.click();
  }

  async TC08_EmailAlreadyExist(username,business,phone,email,password,confirmpassword) {
    // console.log("Check validation when user enter email already exist");

    console.log("Enter username : " + username);
    await this.txb_username.fill(username);

    console.log("Enter business : " + business);
    await this.txb_businessname.fill(business);

    console.log("Enter phone number : " + phone);
    await this.txb_phonenumber.fill(phone);

    console.log("Enter email address already exist : " + email);
    await this.txb_emailaddress(email);

    console.log("Enter password : " + password);
    await this.txb_password.fill(password);

    console.log("Enter confirm password : " + confirmpassword);
    await this.txb_repeatpass.fill(confirmpassword);

    console.log("Click to Register Button");
    await this.btn_register.click();
  }
}

module.exports = { RegisterPageObject };
