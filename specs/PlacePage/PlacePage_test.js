const credentials = require('../testData.json');
const Help = require('../../helpers/helpers');
const Assert = require('../../helpers/validators');
const Wait = require('../../helpers/waiters');

const PlacePageActions = require('./actions/PlacePage_pa');
const pageSteps = new PlacePageActions();



describe('Hedonist', () => {
    
     beforeEach(() => {
        browser.maximizeWindow();
        browser.url(credentials.appUrl);
        Help.loginWithDefaultUser(credentials.email, credentials.password);
        pageSteps.InputSearchName(credentials.PlaceName);
        pageSteps.SearchButtonClick();
        Help.NavigateToPlacePage();
        Wait.forSpinner();
        

       
    });

    afterEach(() => {
        browser.reloadSession();
    });

      xit('create a new review', () => {
        
    
        Help.NewReview(credentials.Review);
        Assert.successNotificationTextIs("Your review has been added");
      
        });


        xit('check-in', () => {
         browser.pause(4000);
         pageSteps.CheckInbutton();
         Assert.successNotificationTextIs("Checked in");
     
        });

        xit('rate place', () => {
         browser.pause(4000);
         Help.RatePlace(3);
         Assert.successNotificationTextIs("Rating set");
       });

       

    
});