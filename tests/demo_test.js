const { expect } = require("chai");

Feature('demo basic check');

Scenario('@1 underarmour basic check', async ( { I, apiMethods, generalMethods, extensionMethods, underarmour}) => {
    await generalMethods.addExtension(extensionMethods.extensionId);
    await apiMethods.getdiscoSignIn();
    await generalMethods.goPageAndSetLocalStorage(underarmour.vendorData.mainUrl,underarmour.vendorData.localStorage);
    let cookieExt = await I.getCookieDomain(underarmour.vendorData.cookieData.domain,underarmour.vendorData.cookieData.name);
    await expect(cookieExt).to.be.empty;
    await extensionMethods.waitPopupAndActivate(true);
    cookieExt = await I.getCookieDomain(underarmour.vendorData.cookieData.domain,underarmour.vendorData.cookieData.name);
    await expect(cookieExt).not.to.be.empty;
    await expect(cookieExt[0]["value"]).to.include(underarmour.vendorData.cookieData.value);
    await underarmour.goProductPage();
    await underarmour.addProductToCart();
    await underarmour.goToCheckout();
    await I.seeElement(underarmour.discoPrice);
    const sourceprice = await I.grabTextFrom(underarmour.totalPrice);
    const price = sourceprice.split(underarmour.vendorData.split);
    const difprice = parseInt(price[1])-parseInt(price[2]);
    await expect(difprice).to.be.gt(0);
});

Scenario('@2 newlook basic check', async ( { I, apiMethods, generalMethods, extensionMethods, newlook}) => {
    await generalMethods.addExtension(extensionMethods.extensionId);
    await apiMethods.getdiscoSignIn();
    await I.amOnPage(newlook.vendorData.mainUrl);
    let cookieExt = await I.getCookieDomain(newlook.vendorData.cookieData.domain,newlook.vendorData.cookieData.name);
    await expect(cookieExt).to.be.empty;
    await extensionMethods.waitPopupAndActivate(false);
    cookieExt = await I.getCookieDomain(newlook.vendorData.cookieData.domain,newlook.vendorData.cookieData.name);
    await expect(cookieExt).not.to.be.empty;
    await expect(cookieExt[0]["value"]).to.include(newlook.vendorData.cookieData.value);
    await newlook.goProductPage();
    await newlook.addProductToCart();
    await newlook.goToCheckout();
    await I.seeElement(newlook.discoPrice);
    const sourceprice = await I.grabTextFrom(newlook.totalPrice);
    const price = sourceprice.split(newlook.vendorData.split);
    const difprice = parseInt(price[1])-parseInt(price[2]);
    await expect(difprice).to.be.gt(0);
});