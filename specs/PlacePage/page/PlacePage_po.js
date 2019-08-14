class PlacePage {
    get InputField () {return $('input.input[placeholder="I\'m looking for..."]')};
    get searchButton () {return $("button.button.is-info")};
    get place() {return $$("h3.title.is-6.has-text-primary")[0]};
    get reviewarea() {return $("textarea.textarea")};
    get postButton() {return $$("button.button.is-primary")[3]};
    get checkInButton() {return $("button.button.is-primary.checkin")};
    get rateButton() {return $("button.button.is-primary.rating")};
    //get ratevalue() {return $$("div.smileys__item")};
    get ratevalue() {return $$("div.smileys__item i.far.fa-2x.fa-circle")[2]};
    get saveButton() {return $("button.button.is-success")};
    get listOFlists() {return $$("a.dropdown-item")[3]};
     

};

module.exports = PlacePage;