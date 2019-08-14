const NewPlaceActions = require('./actions/NewPlace_pa');
const MenuActions = require('../Menu/actions/menu_pa');
const {url} = require('url');
const path = require('path');
const assert = require('assert');
const credentials = require('./../testData.json');

const NewPlacePage = require('./page/NewPlace_po');
const page = new NewPlacePage();

const menuSteps = new MenuActions();
const pageSteps = new NewPlaceActions();

function userLogin(email, password) {
    const emailField = $('input[name="email"]');
    const passwordField = $('input[type="password"]');
    const loginButton = $('button.is-primary');

    emailField.clearValue();
    emailField.setValue(email);
    passwordField.clearValue();
    passwordField.setValue(password);
    loginButton.click();
}

function waitForNotificationToDisappear() {
    const notification = $('div.toast div');
    notification.waitForDisplayed(5000, true);
}

function waitForSpinner() {
    const spinner = $('div#preloader');
    spinner.waitForDisplayed(10000);
    spinner.waitForDisplayed(10000, true);
}


function browserClick(el) {
    browser.execute(() => {
            document.querySelectorAll(el)[0].click();
        });
}

describe('Hedonist', () => {
    
     beforeEach(() => {
        browser.maximizeWindow();
        browser.url('https://staging.bsa-hedonist.online');
        userLogin(credentials.email, credentials.password);
       // waitForSpinner()
       browser.pause(4000);
        menuSteps.navigateToNewPlace();
    });

    afterEach(() => {
        browser.reloadSession();
    });

    xit('creation a new place', () => {
            pageSteps.PlaceName(credentials.PlaceName);
            pageSteps.LocationInput(credentials.Location);
            pageSteps.Zipcode(credentials.Zip);
            pageSteps.Address(credentials.Address);
            pageSteps.Phone(credentials.Phone);
            pageSteps.Website(credentials.Website);
            pageSteps.Description(credentials.Description);
            pageSteps.NextButton(0);
            pageSteps.UploadControl(path.join(__dirname, credentials.PhotoPath));
            pageSteps.NextButton(1);
            pageSteps.NextButton(2);
            pageSteps.Category(0, 3);
            browser.pause(1000);
            pageSteps.Tags(1,1);
            pageSteps.NextButton(3);
            pageSteps.FeaturesChoose(1);
            pageSteps.NextButton(4);
            pageSteps.NextButton(5);
            pageSteps.NextButton(6);
            browser.pause(2000);
            const url = new URL(browser.getUrl());
            const actualUrl = url.pathname.toString();
            assert(actualUrl.startsWith("/places"));
        });

    
    
});