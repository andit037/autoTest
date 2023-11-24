const { $ } = require('@wdio/globals')
const Page = require('./page');
const Gmail = require('../gmail/gmail-api.js');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFullname () {
        return $('input[data-testid="input-fullname"]');
    }

    get inputUsername () {
        return $('input[data-testid="input-username"]');
    }

    get inputPassword () {
        return $('input[data-testid="input-password"]');
    }

    get inputPasswordConfirmation () {
        return $('input[data-testid="input-password-confirmation"]');
    }

    get checkboxAgreement () {
        return $('//span[@data-testid="checkbox-agreement"]');
    }

    get btnSubmit () {
        return $('button[data-testid="button-submit"]');
    }

    get btnCardIndividu () {
        return $('//div[@data-testid="card-Individu"]');
    }

    get btnChannelEmail () {
        return $('//div[@data-testid="channel-email"]');
    }

    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (fullName, username) {
        await this.btnCardIndividu.click();
        await this.inputFullname.setValue(fullName);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue("dfbsdf42369%*D");
        await this.inputPasswordConfirmation.setValue("dfbsdf42369%*D");
        await this.checkboxAgreement.click();
        await this.btnSubmit.click();
        await this.btnChannelEmail.click();
        await browser.pause(1000)
        const otpMessage = await Gmail.retrieveOtp();
        const otp = otpMessage.match(/(\d+)/);
        console.log("otpAKUBERAPAPAPPAP ",otp[0])
    }

    /**
     * overwrite specific options to adapt it to page object
     */
}

module.exports = new LoginPage();
