const LoginPage = require('../page/Login_po');
const page = new LoginPage();

class LoginActions {

    clickloginSpan(){
        page.loginSpan.waitForDisplayed(2000);
        page.loginSpan.click();
    }
    clickSignupSpan() {
        page.signupSpan.waitForDisplayed(2000);
        page.signupSpan.click();
    }
    enterFirstName(value) {
        page.firstNameInput.waitForDisplayed(2000);
        page.firstNameInput.setValue(value);
    }
    enterLastName(value) {
        page.astNameInput.waitForDisplayed(2000);
        page.astNameInput.setValue(value);
    }
    enterNickname(value) {
        page.nicknameInput.waitForDisplayed(2000);
        page.nicknameInput.setValue(value);
    }
    enterEmail(value) {
        page.emailInput.waitForDisplayed(2000);
        page.emailInput.setValue(value);
    }

    enterPassword(value) {
        page.passwordInput.waitForDisplayed(2000);
        page.passwordInput.setValue(value);
    }

    clickLoginButton() {
        page.logInButton.waitForDisplayed(2000);
        page.logInButton.click();
    }

}

module.exports = LoginActions;
