class ListPage {

    get ListNameInput () {return $('input[id=list-name]')};
    get SaveButton() {return $('//button[contains(., "Save")]')};
    //get SaveButton() {return$('button.button.is-success')};
    get DeleteButton() {return $$("button.button.is-danger")[0]};
    get ConfirmDeleteButton() {return $("div.buttons.is-centered").$('button.button.is-danger')}
    get RecentList() {return $$("div.media h3.title.has-text-primary")[0]};
};

module.exports = ListPage;