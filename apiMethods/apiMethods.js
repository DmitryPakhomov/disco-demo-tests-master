const { I } = inject();
const expect = require('chai').expect;

/**
 * Api methods and data
 */
module.exports = {

    discoSigninUrl: "https://api-dev.getdisco.com/auth/login",
    discoSigninData: {
        "email":"dev@getdisco.com",
         "password":"A23zFw1fs3fA",
         },

    async getdiscoSignIn() {
            const headers = {"content-type":"application/json"};
            const ret = await I.sendPostRequest(this.discoSigninUrl, this.discoSigninData, headers);
            await expect(ret.status).to.be.equal(200);
            await I.setCookie([
                {domain:"api-dev.getdisco.com",path: "/",name:"JWT",value:ret.data["jwt"],secure: true,storeId: "0", expires: 1603342929.319337},
                {domain:"api-dev.getdisco.com",path: "/",name:"XSRF-TOKEN",value:ret.data["xsrf_token"],secure: true,storeId: "0",expires: 1603342929.319337}
            ]);
    }

}