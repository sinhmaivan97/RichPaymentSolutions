const { expect } = require('@playwright/test');
class APIUtils {

    apiContext;
    requestBody_Login;

    constructor(apiContext, requestBody_Login) {
        this.apiContext = apiContext;
        this.requestBody_Login = requestBody_Login;
    }

    /*************** Get Access Token - START ********************/
    async getAccessTokenForLogin() {
        console.log('this.requestBody_Login');
        console.log(this.requestBody_Login);
        const response_login = await this.apiContext.post(
            //Request URL
            'https://landing.getrichpos.com/login',
            {
                //Request Body
                data: this.requestBody_Login
            });//post

        //Assertion for Response status code - 200
        expect(response_login.ok()).toBeTruthy();

        //Extract the Response Body in JSON format          
        const response_login_json = await response_login.json();

        //Extract the token
        const api_login_token = response_login_json.token;
        console.log('api_login_token: ' + api_login_token);

        return api_login_token;
    }
}//class

module.exports = { APIUtils };