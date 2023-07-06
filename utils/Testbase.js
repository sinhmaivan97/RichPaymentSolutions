const base = require('@playwright/test');

exports.customtest = base.test.extend(
{
    testData_Login : {
        username : "sinhmai99@gmail.com",
        password : "Sinhmai123"
    }    
}
)