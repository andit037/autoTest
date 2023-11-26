const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const RegisterPage = require('../pageobjects/register.page');
const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/homepage.page');



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
	    await expect(RegisterPage.profileName).toBeExisting();
        await expect(RegisterPage.profileName).toHaveText(fullName);
        await browser.pause(5000)
});


Then(/^I see error message (.*)$/, async (error_message) => {
	    await expect(RegisterPage.errorMessage).toBeExisting();
        await expect(RegisterPage.errorMessage).toHaveText(error_message);
});

Given(/^I am on the login page$/, async() => {
	await browser.navigateTo(`https://www.ralali.com/login`)
});

When(/^I login with (.*) and (.*)$/, async(username,password) => {
	await LoginPage.Login(username,password)
});


When(/^I filter (.*) on category product$/, async(category_filter) => {
	await HomePage.homePageCategory(category_filter)
});


When(/^I choose (.*) of product$/, async(product_name) => {
	await HomePage.chooseProduct(product_name)
});


When(/^I put (.*) of product on cart$/, async(total) => {
	await HomePage.clickAddProduct(total)
});


Then(/^I see (.*) on cart$/, async(totalProduct) => {
	await expect(HomePage.orderQty).toBeExisting();
    await expect(HomePage.orderQty).toHaveText(totalProduct);
});
