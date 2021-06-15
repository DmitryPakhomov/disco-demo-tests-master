# DISCO DEMO TEST FRAMEWORK

## Local run

Clone repo first

Copy extension to /extension folder

install jq

run 
```sh 
jq '.+{"key":"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1K7jeUar5CqNOsbClepssGQhRumMTrSwDnYg91jBum8n+wxe+WCpJxhZdpptiVChQH5yQVXNLF5tn+pRFqaTHWeo0NktojB2g08ZYDXhtllTcs7xOR39lNn18eCNC9N1p25Kdes0pXCWZdQ+DHoEVGVJWqjcOfUrTvMo+pcBDKR+Y9w65xue6gm4b4qAlm9FFYvgsnjzw3Y7U3MCqfMjr5ioKeZxJNB8IUhAhExXn32KRsPqPrlXQqMeLbyYdhopanMdp87mrPD6zknlGc3SfDcFETphtQDOlotFZmshysI3rJj//5CVONFnkWGmax0Pbg+92Y5VXYxH55C2HIiJHwIDAQAB"}' /extension/manifest.json > tmp && mv tmp /extension/manifest.json
```


```sh
$ npm i
$ npx codeceptjs run -c codecept.conf.js  --steps --plugins allure
$ npm run allure_report
```

## Webhook run

Trigger CI/CD pipeline in this project and create Allure report page
https://d_trukhin.gitlab.io/disco-demo-tests

```sh
curl -X POST \
     -F token=3676da1fe3a1edd7093131c96c1b72 \
     -F ref=master \
     https://gitlab.com/api/v4/projects/21866469/trigger/pipeline
```


## Top-level folder structure

A quick look at the top-level files and directories you'll see in the project.

    .
    ├──/node_modules
    ├──/apiMethods
    ├──/pageMethods
    ├──/vendorDataMethods
    ├──/tests
    ├──/hooks
    ├── .gitignore
    ├── .gitlab-ci.yml.js
    ├── config.conf.js.js
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/tests`**: This directory contains all test cases (scenarios)

2.  **`/pageMethods`**: This directory contains page templates, pages and elements methods

3.  **`/apiMethods`**: This directory contains api methods and data (for signin etc.)

4.  **`/vendorDataMethods`**: This directory contains page templates, pages, elements methods and test cases data for vendors

5.  **`/hooks`**: This directory contains hooks, helpers

6.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

7.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

8.  **`.gitlab-ci.yml`**: This is CI/CD configuration file for Gitlab CI

9.  **`config.conf.js`**: This is the main configuration file

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.