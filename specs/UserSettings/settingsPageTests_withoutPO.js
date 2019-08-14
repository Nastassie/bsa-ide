const assert = require('assert');

function userLogin(email, password) {
    const emailField = $('input[name="email"]');
    const passField = $('input[type="password"]');
    const loginButton = $('button.is-primary');

    emailField.clearValue();
    emailField.setValue(email);
    passField.clearValue();
    passField.setValue(password);
    loginButton.click();
}

function waitForSpinner() {
    const spinner = $('div#preloader');
    spinner.waitForDisplayed(10000);
    spinner.waitForDisplayed(10000, true);
}

function waitForNotificationToDisappear() {
    const notification = $('div.toast div');
    notification.waitForDisplayed(5000, true);
}

function browserClick(el) {
    browser.execute(() => {
            document.querySelectorAll(el)[0].click();
        });
}

describe('Settings page tests', () => {

    xit('should login with changed password', () => {
        
        browser.maximizeWindow();
        browser.url('https://staging.bsa-hedonist.online');
        userLogin('wdiotest@wdiotest.com', 'wdiotest');
        waitForSpinner();
        const notification = $('div.toast div');
        const oldPasswordInput = $('//label[contains(., "Old password")]/../div/input');
        const newPasswordInput = $('//label[contains(., "New password")]/../div/input');
        const saveChangesButton = $('//a[contains(., "Save")]');
        const menuDropDown = $('div.profile');
        const logoutOption = $('a*=Log out');
        const settingsOption = $('a[href="/settings"]');

        menuDropDown.waitForDisplayed(10000);
        menuDropDown.moveTo();
        settingsOption.waitForDisplayed(10000);
        settingsOption.click();
        oldPasswordInput.waitForDisplayed(2000);
        oldPasswordInput.setValue("wdiotest");
        newPasswordInput.waitForDisplayed(2000);
        newPasswordInput.setValue("123123123");
        saveChangesButton.click();
        
        assert.strictEqual(notification.getText(), "Data successfully changed");
        waitForNotificationToDisappear();        
        
        menuDropDown.waitForDisplayed(10000);
        menuDropDown.moveTo();
        menuDropDown.click();
        logoutOption.waitForDisplayed(2000);
        logoutOption.click();

        userLogin('wdiotest@wdiotest.com', 'wdiotest');

        assert.strictEqual(notification.getText(), "The email or password is incorrect");
        waitForNotificationToDisappear();

        // postconditions
        browser.refresh();
        browser.maximizeWindow();
        browser.url('https://staging.bsa-hedonist.online');
        
        userLogin("wdiotest@wdiotest.com", "123123123");
        waitForSpinner();

        menuDropDown.waitForDisplayed(10000);
        menuDropDown.moveTo();
        settingsOption.waitForDisplayed(10000);
        settingsOption.click();
        oldPasswordInput.waitForDisplayed(2000);
        oldPasswordInput.setValue("123123123");
        newPasswordInput.waitForDisplayed(2000);
        newPasswordInput.setValue("wdiotest");
        saveChangesButton.click();

        browser.reloadSession();

    });

    


});