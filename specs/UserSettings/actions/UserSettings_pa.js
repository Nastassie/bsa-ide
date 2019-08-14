const SettingsPage = require('../page/UserSettings_po');
const page = new SettingsPage();

class SettingsActions {

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

    enterOldPassword(value) {
        page.oldPasswordInput.waitForDisplayed(2000);
        page.oldPasswordInput.setValue(value);
    }

    enterNewPassword(value) {
        page.newPasswordInput.waitForDisplayed(2000);
        page.newPasswordInput.setValue(value);
    }

    enterPhone(value) {
        page.phoneIput.waitForDisplayed(2000);
        page.phoneIput.setValue(value);
    }

    _enterDay(value) {
        page.dayInput.waitForDisplayed(2000);
        page.dayInput.setValue(value)
    }

    _enterMonth(value) {
        page.monthInput.waitForDisplayed(2000);
        page.monthInput.setValue(value);
    }

    _enterYear(value) {
        page.yearInput.waitForDisplayed(2000);
        page.yearInput.setValue(value);
    }

    enterDate(day, month, year) {
        this._enterDay(day);
        this._enterMonth(month);
        this._enterYear(year);
    }

    enterInstagram(value) {
        page.instagramInput.waitForDisplayed(2000);
        page.instagramInput.setValue(value);
    }

    enterTwitter(value) {
        page.twitterInput.waitForDisplayed(2000);
        page.twitterInput.setValue(value);
    }

    enterFacebook(value) {
        page.facebookInput.waitForDisplayed(2000);
        page.facebookInput.setValue(value);
    }

    uploadAvatar(path) {
        page.imageInput.waitForDisplayed(2000);
        page.imageInput.setValue(path);
    }

    deleteAvatar() {
        page.deleteAvatarButton.waitForDisplayed(2000);
        page.deleteAvatarButton.click();
    }

    saveChanges() {
        page.saveButton.waitForDisplayed(2000);
        page.saveButton.click();
    }

    SingUp() {
        page.SingUpButton.waitForDisplayed(2000);
        page.SingUpButton.click();
    }
    
    getFristNameValue() {
        page.firstNameInput.waitForDisplayed(2000);
        return page.firstNameInput.getValue();
    }

    getLastNameValue() {
        page.lastNameInput.waitForDisplayed(2000);
        return page.lastNameInput.getValue();
    }

}

module.exports = SettingsActions;
