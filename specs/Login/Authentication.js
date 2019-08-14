const credentials = require('../testData.json');
const Help = require('../../helpers/helpers');
const Assert = require('../../helpers/validators');
const Wait = require('../../helpers/waiters');

describe('Online-IDE', () => {
    
    beforeEach(() => {
       browser.maximizeWindow();
       browser.url(credentials.appUrl);
       //Help.loginWithDefaultUser(credentials.email, credentials.password);
       //Wait.forSpinner();
    
   });

   afterEach(() => {
       browser.reloadSession();
   });

   it('registion a new account', () => {
       
   
       Help.registerNewAccount(credentials.name, credentials.surname, credentials.nickname, credentials.email, credentials.password);
    
      /* Assert.successNotificationTextIs("The list was saved!");
       Wait.forNotificationToDisappear();  
       Assert.successCreationList(credentials.listName);
       browser.pause(3000);
       Help.clickItemInList(credentials.listName);
       browser.pause(3000);
       Assert.navigationToPage("165.227.137.250/list/");*/
   });


   xit('deletion a list', () => {


       Help.DeleteList("123");
       Assert.InfoNotificationTextIs("The list was removed");
       
    
   });

       
   
});