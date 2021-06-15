const { I } = inject();

module.exports = {

    //use constant extension id with key.pem
    extensionId: "anacojjhfpfcefgmenoffjbfbdeckked",

    notificationButton: "shadow/#disco-app div.notification__cta",
    notificationButtonActivate: "shadow/#disco-app div.notification__cta_activation",
    notificationButtonActivated: "shadow/#disco-app div.notification__cta_activated",
    notificationButtonClose: "shadow/#disco-app div.notification__close",

    async waitPopupAndActivate(notactivated) {
        await I.waitForElement(this.notificationButton);
        await I.click(this.notificationButton);
        if (notactivated===true) {
            await I.waitForElement(this.notificationButtonActivate);
        } else {
            await I.waitForElement(this.notificationButtonActivated);
        }
        await I.click(this.notificationButtonClose);
        await I.waitToHide(this.notificationButton);
    },

}