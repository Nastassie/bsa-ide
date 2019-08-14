const NewPlacePage = require('../page/NewPlace_po');
const page = new NewPlacePage();

class NewPlaceActions {
    clickNextButton() {
        page.nextButton.waitForDisplayed(2000);
        page.nextButton.click();
    }

    PlaceName(value) {
        page.PlaceNameInput.waitForDisplayed(2000);
        page.PlaceNameInput.clearValue();
        page.PlaceNameInput.setValue(value);
    }

    LocationInput(value) {
        page.LocationInput.waitForDisplayed(2000);
        page.LocationInput.clearValue();
        page.LocationInput.setValue(value);
    }
    Zipcode(value) {
        page.ZipInput.waitForDisplayed(2000);
        page.ZipInput.clearValue();
        page.ZipInput.setValue(value);
    }

    Address(value) {
        page.AddressInput.waitForDisplayed(2000);
        page.AddressInput.clearValue();
        page.AddressInput.setValue(value);
    }

    Phone(value) {
        page.PhoneInput.waitForDisplayed(2000);
        page.PhoneInput.clearValue();
        page.PhoneInput.setValue(value);
    }

    Website(value) {
        page.WebsiteInput.waitForDisplayed(2000);
        page.WebsiteInput.clearValue();
        page.WebsiteInput.setValue(value);
    }
    Description(value) {
        page.DescriptionInput.waitForDisplayed(2000);
        page.DescriptionInput.clearValue();
        page.DescriptionInput.setValue(value);
    }

    NextButton(i) {
        browser.pause(1000);
        page.NextButtons[i].waitForDisplayed(2000);
        page.NextButtons[i].click();
    }
    
    UploadControl(path) {
       page.Uploadphoto.setValue(path);
    }
    Category(el, ind) {
        page.CategoryInput[el].waitForDisplayed(2000);
        page.CategoryInput[el].selectByIndex(ind);
    }
    Tags(el, ind) {
        page.TagsInput[el].waitForDisplayed(2000);
        page.TagsInput[el].selectByIndex(ind);
    }
    FeaturesChoose(index) {
        page.FeaturesChoose[index].waitForDisplayed(5000);
        page.FeaturesChoose[index].click();
    }
  
}

module.exports = NewPlaceActions;