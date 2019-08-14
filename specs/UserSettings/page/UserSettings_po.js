class SettingsPage {

    get firstNameInput () {return $('//label[contains(., "First name")]/../div/input')};
    get lastNameInput () {return $('//label[contains(., "Last name")]/../div/input')};
    get emailInput () {return $('//label[contains(., "Email")]/../div/input')};

    get PasswordInput () { return $('//label[contains(., "New password")]/../div/input')};
    //get SingUpButton() {return $('//button[contains(., "Create")]')};

    get oldPasswordInput () {return $('//label[contains(., "Old password")]/../div/input')};
    get newPasswordInput () {return $('//label[contains(., "New password")]/../div/input')};
    get phoneIput () {return $('//label[contains(., "Phone")]/../div/input')};
    get dayInput () {return $('input[placeholder="Day"]')};
    get monthInput () {return $('input[placeholder="Month"]')};
    get yearInput () {return $('input[placeholder="Year"]')};
    get instagramInput () {return $('//label[contains(., "Inastagram")]/../div/input')};
    get twitterInput () {return $('//label[contains(., "Twitter")]/../div/input')};
    get facebookInput () {return $('//label[contains(., "Facebook")]/../div/input')};
    get imageInput () {return $('input[type=file]')};
    get deleteAvatarButton () {return $('//a/span[contains(., "Delete avatar")]')};
    get saveButton () {return $('//a[contains(., "Save")]')};

};

module.exports = SettingsPage;

