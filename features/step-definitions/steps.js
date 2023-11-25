const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const RegisterPage = require('../pageobjects/register.page');



Given(/^I am on the register page$/, async() => {
	await browser.url(`https://www.ralali.com/signup`)
});


When(/^I register with (.*) and (.*) and (.*) and (.*)$/, async (fullName, username,password,passwordConfirmation) => {
	await RegisterPage.register(fullName, username,password,passwordConfirmation)
});


When(/^I insert the OTP on register page$/, async() => {
	await RegisterPage.registerOTP()
    await browser.pause(2000);
});



Then(/^I see my profile (.*) on the dashboard page$/, async(fullName) => {
	if (await RegisterPage.profileName.isExisting()){
	    await expect(RegisterPage.profileName).toBeExisting();
        await expect(RegisterPage.profileName).toHaveText(fullName);
    }
});




Then(/^I see error message (.*)$/, async (error_message) => {
    if (await RegisterPage.errorMessage.isExisting()){
	    await expect(RegisterPage.errorMessage).toBeExisting();
        await expect(RegisterPage.errorMessage).toHaveText(error_message);
    }
});


