const SettingsActions = require('./actions/UserSettings_pa')
const MenuActions = require('../Menu/actions/menu_pa');
const assert = require('assert');
const credentials = require('./../testData.json');

const menuSteps = new MenuActions();
const pageSteps = new SettingsActions();

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

    beforeEach(() => {
        browser.maximizeWindow();
        browser.url('https://staging.bsa-hedonist.online');
        userLogin('wdiotest@wdiotest.com', 'wdiotest');
        menuSteps.navigateToSettings();
    });

    afterEach(() => {
        browser.reloadSession();
    });

    xit('should login with changed password', () => {
        
        const notification = $('div.toast div');

        pageSteps.enterOldPassword("wdiotest");
        pageSteps.enterNewPassword("123123123");
        pageSteps.saveChanges();
        
        assert.strictEqual(notification.getText(), "Data successfully changed");
        waitForNotificationToDisappear();        
        
        menuSteps.logOut();
        userLogin('wdiotest@wdiotest.com', 'wdiotest');

        assert.strictEqual(notification.getText(), "The email or password is incorrect");
        waitForNotificationToDisappear();

        browser.reloadSession();
        browser.maximizeWindow();
        browser.url('https://staging.bsa-hedonist.online');
        
        userLogin("wdiotest@wdiotest.com", "123123123");
        menuSteps.navigateToSettings();
        pageSteps.enterOldPassword("123123123");
        pageSteps.enterNewPassword("wdiotest");
        pageSteps.saveChanges();

    });
    
    xit('should edit user first name', () => {
        pageSteps.enterFirstName(credentials.changedName);
        pageSteps.enterLastName(credentials.changedSurname);
        pageSteps.saveChanges();

        browser.refresh();

        assert.strictEqual(pageSteps.getFristNameValue() ,credentials.changedName);
        assert.strictEqual(pageSteps.getLastNameValue(), credentials.changedSurname);

        pageSteps.enterFirstName(credentials.name);
        pageSteps.enterLastName(credentials.surname);
        pageSteps.saveChanges();

    });


});