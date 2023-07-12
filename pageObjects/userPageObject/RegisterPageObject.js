import { CommonUtils } from '../../utils/CommonUtils';

exports.RegisterPageObject = class RegisterPageObject {

  constructor(page) {
    this.page = page;
    /* textbox in register screen */
    this.btn_signup = page.getByRole("button", { name: "Sign up" });
    this.txb_username = page.getByTestId(":r3:");
    this.txb_businessname = page.getByTestId(":r4:");
    this.txb_phonenumber = page.getByTestId(":r5:");
    this.txb_emailaddress = page.getByTestId(":r16:");
    this.txb_password = page.getByTestId(":r7:");
    this.txb_repeatpass = page.getByTestId(":r8:");
    this.btn_register = page.getByRole("button", { name: "Register" });
    /* error message of register screen */
    this.text_user = page.getByTestId(":r3:-helper-text");
    this.text_business = page.getByTestId(":r4:-helper-text");
    this.text_phonenumber = page.getByTestId(":r5:-helper-text");
    this.text_email = page.getByTestId(":r6:-helper-text");
    this.text_pass = page.getByTestId(":r7:-helper-text");
    this.text_confirm_pass = page.getByTestId(":r8:-helper-text");
  }

  async gotoApplication() {
    const applicationURL = "https://business-settings.stage.devrpay.com/checkout";

    console.log('Go to application: ' + applicationURL);
    await this.page.goto(applicationURL);

    console.log("Click to Signup Button");
    await this.btn_signup.click();
  }

  async TC01_EmptyData() {
    console.log("Check validation when user does'nt enter all textbox");
    await this.btn_register.click();

    await this.text_user.toHaveText('Username is required');
    await this.text_business.toHaveText('Business name is required');
    await this.text_phonenumber.toHaveText('Phone number is required');
    await this.text_email.toHaveText('Email is required');
    await this.text_pass.toHaveText('This field cannot be blank');
    await this.text_confirm_pass.toHaveText('Password is required');
  }

  async TC02_BlankField(username, email, password) {
    console.log("Check validation when user does'nt enter business name, phone number and confirm password");

    console.log("Enter username : " + username);
    await this.txb_username.fill(username);

    console.log("Enter email : " + email);
    await this.txb_emailaddress.fill(email);

    console.log("Enter password : " + password);
    await this.txb_password.fill(password);

    console.log("Click to Register Button");
    await this.btn_register.click();

    await this.text_business.toHaveText('Business name is required');
    await this.text_phonenumber.toHaveText('Phone number is required');
    await this.text_confirm_pass.toHaveText('Confirm password does not matching with password');
  }

  async TC03_InvalidPhoneNumber(username, business, phone, email, password, confirmpassword) {
    console.log("Check validation when user enter invalid phonenumber");

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

    await this.text_phonenumber.toHaveText('Invalid phone number.');
  }

  async TC04_InvalidEmail(username, business, phone, email, password, confirmpassword) {
    console.log("Check validation when user enter invalid email");

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

    await this.text_email.toHaveText('Email is not valid.');
  }

  async TC05_InvalidPassword(username, business, phone, email, password, confirmpassword) {
    console.log("Check validation when user enter invalid password");

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

    console.log("Enter invalid confirm password : " + confirmpassword);
    await this.txb_repeatpass.fill(confirmpassword);

    console.log("Click to Register Button");
    await this.btn_register.click();

    await this.text_pass.toHaveText('Password is too short - should be 8 chars minimum.');
  }

  async TC06_PasswordAndConfirmPasswordNotMatching(username, business, phone, email, password, confirmpassword) {
    console.log("Check validation when user enter password and confirm password matching");

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

    await this.text_confirm_pass.toHaveText('Confirm password does not matching with password');
  }

  async TC07_ValidInformation(username, business, phone, email, password, confirmpassword) {
    console.log("Check validation when user enter valid information");

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

    await expect(page.locator("[id = '1']")).toHaveText('Sign up successfully!');
  }

  async TC08_EmailAlreadyExist(username, business, phone, email, password, confirmpassword) {
    console.log("Check validation when user enter email already exist");

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

    await expect(page.locator('#2')).toHaveText('User already existed');
  }
}
