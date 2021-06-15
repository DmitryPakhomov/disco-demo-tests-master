const { I } = inject();

module.exports = {

    async addExtension(id) {
        await I.amOnPage('chrome://extensions');
        await I.executeScript(function(exid) {
            chrome.developerPrivate.updateExtensionConfiguration({extensionId: exid,incognitoAccess: true});
        }, id);
    },
    
    async goPageAndSetLocalStorage(url,storage) {
        await I.amOnPage(url);
        await I.executeScript(function(storagedata) {
            localStorage.setItem(storagedata.name, storagedata.data)
        }, storage);
        await I.refreshPage();
    }

}