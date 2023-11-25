const { $ } = require('@wdio/globals')
const Gmail = require('../gmail/gmail-api.js');
const { isNoSubstitutionTemplateLiteral } = require('typescript');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class RegisterPage{
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

    get errorMessage () {
        return $('//div[@class="TextInput__HelperTextWrapper-jfrtn4-4 fJvDzr"]/p');
    }

    get profileName () {
        return $('//p/span[@class="Header__ProfileName-ecyz7w-8 jpBQpC"]');
    }

    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async register (fullName, username,password,passwordConfirmation) {
        await this.btnCardIndividu.click();
        await this.inputFullname.setValue(fullName);
        await this.inputUsername.setValue(username);
        if (await this.inputPassword.isExisting()){
            await this.inputPassword.setValue(password);
        }
        if (await this.inputPasswordConfirmation.isExisting()){
            await this.inputPasswordConfirmation.setValue(passwordConfirmation);
        }
        await this.checkboxAgreement.click();
        if(await this.btnSubmit.isEnabled()){
            await this.btnSubmit.click();
        }
    }

    async registerOTP () {
        await this.btnChannelEmail.click();
        await browser.pause(7000);
        // const otpMessage = await Gmail.retrieveOtp();
        // const otp = otpMessage.match(/(\d+)/);
        // console.log("MyOTP ",otp[0])
        const str = "123456"
        var optArr = str.split("")
        for (let i = 0; i < optArr.length; i++) {
            const num = i+1;
            const num2Str = num.toString(); 
		    const elem = await $(`input[data-testid='otp-input-${num2Str}']`)
            await elem.setValue(optArr[i])
            await browser.pause(1000)
	  }
    }

    /**
     * overwrite specific options to adapt it to page object
     */
}

module.exports = new RegisterPage();
