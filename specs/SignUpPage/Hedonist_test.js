const credentials = require('../testData.json');
const Help = require('../../helpers/helpers');
const Assert = require('../../helpers/validators');
const Wait = require('../../helpers/waiters');
const LoginPage = require('../Login/page/Login_po');

const loginPage = new LoginPage();

describe('Hedonist', () => {


    afterEach(() => {
        browser.reloadSession();
    });

    xit('should login with invalid data', () => {

        Help.loginWithCustomUser(credentials.email, credentials.changedPassword);
        Assert.errorNotificationTextIs('The email or password is incorrect');
 
    });

    xit('the registration', () => {

        Help.InputDataForRegistration(credentials.name, credentials.surname, credentials.emailForRegistration, credentials.password);
        Assert.successNotificationTextIs('You have successfully registered! Now you need to login');
        Wait.forNotificationToDisappear();

        Help.loginWithCustomUser(credentials.emailForRegistration, credentials.password);
        Assert.successNotificationTextIs('Welcome!');
        Wait.forNotificationToDisappear();
        browser.pause(4000);
        Assert.successnavigationToPage('165.227.137.250/search')
        
    });

});