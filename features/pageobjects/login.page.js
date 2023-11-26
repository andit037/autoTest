const { $ } = require('@wdio/globals')
const Gmail = require('../gmail/gmail-api.js');
const RegisterPage = require('./register.page.js');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage{
    
    async Login (username,password) {
        await RegisterPage.inputUsername.waitForDisplayed(5000);
        await RegisterPage.inputUsername.setValue(username);
        await RegisterPage.inputPassword.setValue(password);
        await RegisterPage.btnSubmit.click();
    }
}

module.exports = new LoginPage();
