const LoginActions = require('../specs/Login/actions/Login_pa');
const page = new LoginActions();
/*const SignUpActions = require('../specs/SignUpPage/actions/SignUpPage_pa');
const pageSteps = new SignUpActions();
const ListActions = require('../specs/ListPage/actions/ListPage_pa');
const listpageSteps = new ListActions();
const PlaceActions = require('../specs/PlacePage/actions/PlacePage_pa');
const PlaceSteps = new PlaceActions();*/
const credentials = require('./../testData.json');

class HelpClass 
{

    clickItemInList(name) {
        const place = $$(`//div[contains(@class, "place-item")]//h3/a[contains(., "${name}")]`);
        if (place.length === 0) {
            throw new Error("Element not found");
        }
        //place[0].scrollIntoView();
        place[0].click();
    }

    browserClick(elm){ return browser.execute((e) => {document.querySelector(e).click(); }, elm); }

    browserClickOnArrayElement(elm, index){return browser.execute((e, i) => {document.querySelectorAll(e)[i - 1].click();}, elm, index);}
       
    loginWithDefaultUser() {
        browser.maximizeWindow();
        browser.url(credentials.appUrl);

        page.enterEmail(credentials.email);
        page.enterPassword(credentials.password);
        page.clickLoginButton();
    }
    
    loginWithCustomUser(email, password) {
        browser.maximizeWindow();
        browser.url(credentials.appUrl);

        page.enterEmail(email);
        page.enterPassword(password);
        page.clickLoginButton();
    }

    registerNewAccount(name, surname, nickname, email, password) {

        page.clickSignupSpan();
        page.enterFirstName(name);
        page.enterLastName(surname);
        page.enterNickname(nickname);
        page.enterEmail(email);
        page.enterPassword(password);
        page.clickLoginButton();
    }

    CreateNewList(listName) {
        browser.pause(5000);
        this.browserClick('a[href="/my-lists/add"]');
        listpageSteps.ListName(listName);
        listpageSteps.SaveButton();
    } 
    DeleteList(name) {
        browser.pause(2000);
        listpageSteps.DeleteButton();
        listpageSteps.ConfirmDeleteButton();
    }  
    NavigateToPlacePage() {
        browser.pause(2000);
        this.browserClickOnArrayElement("h3.title.is-6.has-text-primary a", 1);
    }    
    NewReview(review) {
        PlaceSteps.InputReview(review);
        PlaceSteps.postbutton();
    }
    RatePlace(index) {
        PlaceSteps.RateButton();
        this.browserClickOnArrayElement("div.smileys__item i.far.fa-2x.fa-circle", 2);
        
    }


}

module.exports = new HelpClass();