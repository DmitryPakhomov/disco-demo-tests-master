const { I } = inject();

module.exports = {

    //vendor test cases data and text
    vendorData: {
        mainUrl: "https://www.underarmour.co.uk/en-gb",
        productUrl1: "https://www.underarmour.co.uk/en-gb/mens-ua-project-rock-3-training-shoes/3023004.html",
        checkoutUrl: "https://www.underarmour.co.uk/en-gb/checkout-cart",
        cookieData: {
            domain: ".awin1.com",
            name: "aw3279", 
            value: "684909"
        },
        split: "£",
        localStorage: {
            data: JSON.stringify({"name":"truste.eu.cookie.notice_gdpr_prefs","value":"0,1,2:","path":"/","expires":9999999999999}),
            name: "truste.eu.cookie.notice_gdpr_prefs"
        }
    },
    
    //vendor elements locators
    addCartButton: {css:"button[id='add-to-cart']"},
    firstEnableSize: {xpath:"//ul[@class='swatches size']//li[@class='emptyswatch'][1]"},
    sizeLabel: {css:"div.select-a-size"},
    dialogContinueShopping: {css:"div.continue-shopping.close-dialog"},
    checkoutInfo: {css:"div.cart-actions-info"},
    discoPrice: {css:"span.disco-price"},
    totalPrice: {xpath:"//tr[@class='order-total']//td[2]"},

    //vendor methods
    async goProductPage() {
        await I.amOnPage(this.vendorData.productUrl1);
        await I.waitForElement(this.addCartButton);
    },
    
    async addProductToCart() {
        await I.click(this.firstEnableSize);
        await I.waitToHide(this.sizeLabel);
        await I.click(this.addCartButton);
        await I.waitForElement(this.dialogContinueShopping);
    },

    async goToCheckout() {
        await I.amOnPage(this.vendorData.checkoutUrl);
        await I.waitForElement(this.checkoutInfo);
    }


}