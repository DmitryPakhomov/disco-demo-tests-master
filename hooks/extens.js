let Helper = codecept_helper;
const { QueryHandler } = require("query-selector-shadow-dom/plugins/puppeteer");

class Extens extends Helper {
    
    async getCookieDomain(domain,name) {
        const {page} = this.helpers['Puppeteer'];
        try {
            const cookies = await page._client.send('Network.getAllCookies');
            return cookies["cookies"].filter(e => ((e.domain === domain) && (e.name === name)));
            }
        catch (err) {
            return err
        }
    };
}

module.exports = Extens;