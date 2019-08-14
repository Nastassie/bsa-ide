class LoginPage {

    get loginSpan () {return $$("span.ui-button-text.ui-clickable")[0]};
    get singupSpan () {return $$("span.ui-button-text.ui-clickable")[0]};
    get firstNameInput () {return $("input#float-firstName-input")};
    get lastNameInput () {return $("input#float-lastName-input")};
    get nicknameInput () {return $("input#float-nickName-input")}
    get emailInput () {return $('input#float-email-input')};
    get passwordInput () {return $('input.ng-untouched.ng-pristine.ng-invalid')};
    get logInButton () {return $('button.auth-btn.ng-star-inserted')};
    get googleButton () {return $('button.google-btn')}

};

module.exports = LoginPage;

