const {  QueryHandler } = require("query-selector-shadow-dom/plugins/puppeteer");
const puppeteer = require('puppeteer');

let bootstrap = async () => {
    await puppeteer.__experimental_registerCustomQueryHandler('shadow', QueryHandler);
};

module.exports = bootstrap