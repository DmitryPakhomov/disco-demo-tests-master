const pathToExtension = (require('path').join(__dirname, 'extension')); 

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: '',
      show: true,
      //manualStart:true,
      //browser: 'chromium',
      chrome: {
        args: [
           `--disable-extensions-except=${pathToExtension}`,
           `--load-extension=${pathToExtension}`,
           '--disable-web-security',
           '--no-sandbox', 
           //'--ignore-certificate-errors',
           '--disable-setuid-sandbox',
           //'--enable-automation'
        ]
    },
    "waitForAction": 3000,
    "waitForTimeout": 30000,
    },
    REST: {
        endpoint: '',
        timeout: 20000
      },
    Extens: {
        require : "./hooks/extens.js",
      }, 
  },
  include: {
    I: './steps_file.js',
    apiMethods: "./apiMethods/apiMethods.js",
    generalMethods: "./pageMethods/generalMethods.js",
    extensionMethods: "./pageMethods/extensionMethods.js",
    underarmour: "./vendorsDataMethods/underarmour.js",
    newlook: "./vendorsDataMethods/newlook.js",
  },
  bootstrap: require("./hooks/bootstrap.js"),
  mocha: {
  },
  name: 'disco_demo_test',
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
        "enabled": true
    }
  }
}