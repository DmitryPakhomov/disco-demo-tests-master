const { I } = inject();

module.exports = {

    //vendor test cases data and text
    vendorData: {
        mainUrl: "https://www.newlook.com/uk",
        productUrl1: "https://www.newlook.com/uk/mens/clothing/hoodies-sweatshirts/jack-jones-mustard-colour-block-logo-sweatshirt/p/671726787",
        checkoutUrl: "https://www.newlook.com/uk/cart",
        sizeOptions: "object:125",
        cookieData: {
            domain: ".awin1.com",
            name: "aw1946", 
            value: "684909"
        },
        split: "£",
    },

    //vendor elements locators
    addCartButton: {css:"button[data-translate='product.addToBag']"},
    selectSize: {css:"select[data-ng-model='productInfo.selectedSize']"},
    addedToBag: {css:"span[data-translate='product.addedToBag.added']"},
    checkoutInfo: {css:"div.order-summary"},
    discoPrice: {css:"span.disco-price"},
    totalPrice: {css:"span.order-summary__value"},

    //vendor methods
    async goProductPage() {
        await I.amOnPage(this.vendorData.productUrl1);
        await I.waitForElement(this.addCartButton);
    },
    
    async addProductToCart() {
        await I.selectOption(this.selectSize,this.vendorData.sizeOptions);
        await I.click(this.addCartButton);
        await I.waitForElement(this.addedToBag);
    },

    async goToCheckout() {
        await I.amOnPage(this.vendorData.checkoutUrl);
        await I.waitForElement(this.checkoutInfo);
    }


}