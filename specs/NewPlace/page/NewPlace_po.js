class NewPlacePage {
    get nameFieldLable () {return $('//label[contains(., "Name*")]')};
    get nextButton () {return $('div.tab-item:not([style="display: none;"]) span.is-success')};

    get PlaceNameInput() {return $("input.input.is-medium")};
    get LocationInput() {return $$('input[placeholder="Location"]')[1]};
    get ZipInput () {return $("input[placeholder='09678']")};
    get AddressInput () { return $("input[placeholder^=Khreschatyk")};
    //get AddressInput () { return $('//label[contains(., "Address*")]/../div/div/div/input')};
    get PhoneInput () { return $("input.input[type=tel]")};
    get WebsiteInput() {return $('input[placeholder="http://the-best-place.com/"]')};
    get DescriptionInput() {return $("textarea")};
    //get SaveButton() {return$('button.button.is-success')};
    get NextButtons() {return $$("span.button.is-success")};
    get Uploadphoto() {return $('input[type=file]')};
    get CategoryInput() {return $$("select")};
    get TagsInput() {return $$("select")};
    get FeaturesChoose() {return $$("span.check.is-success")};
  

};

module.exports = NewPlacePage;