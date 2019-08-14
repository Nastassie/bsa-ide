const SignUpPage = require('../page/SignUpPage_po');
const page = new SignUpPage();

class SignUpActions {

    enterFirstName(value) {
        page.firstNameInput.waitForDisplayed(2000);
        page.firstNameInput.clearValue();
        page.firstNameInput.setValue(value);
    }

    enterLastName(value) {
        page.lastNameInput.waitForDisplayed(2000);
        page.lastNameInput.clearValue();
        page.lastNameInput.setValue(value);
    }

    enterEmail(value) {
        page.emailInput.waitForDisplayed(2000);
        page.emailInput.clearValue();
        page.emailInput.setValue(value);
    }

    enterPassword(value) {
        page.PasswordInput.waitForDisplayed(2000);
        page.PasswordInput.clearValue();
        page.PasswordInput.setValue(value);
    }

   /* enterOldPassword(value) {
        page.oldPasswordInput.waitForDisplayed(2000);
        page.oldPasswordInput.setValue(value);
    }

    enterNewPassword(value) {
        page.newPasswordInput.waitForDisplayed(2000);
        page.newPasswordInput.setValue(value);
    }
  
*/
    SingUp() {
        page.SingUpButton.waitForDisplayed(2000);
        page.SingUpButton.click();
    }
    
   /* getFristNameValue() {
        page.firstNameInput.waitForDisplayed(2000);
        return page.firstNameInput.getValue();
    }

    getLastNameValue() {
        page.lastNameInput.waitForDisplayed(2000);
        return page.lastNameInput.getValue();
    }*/

}

module.exports = SignUpActions;
