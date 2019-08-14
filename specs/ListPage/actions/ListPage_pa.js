const ListPage = require('../page/ListPage_po');
const page = new ListPage();

class ListActions {

    ListName(value) {
        page.ListNameInput.waitForDisplayed(2000);
        page.ListNameInput.clearValue();
        page.ListNameInput.setValue(value);
    }

    SaveButton() {
        page.SaveButton.waitForDisplayed(2000);
        page.SaveButton.click();
    }
    DeleteButton() {
        page.DeleteButton.waitForDisplayed(2000);
        page.DeleteButton.click();
    }
    ConfirmDeleteButton() {
        page.ConfirmDeleteButton.waitForDisplayed(2000);
        page.ConfirmDeleteButton.click();
    }

}

module.exports = ListActions;