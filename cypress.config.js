const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
       "reportDir": "cypress/report",
       "overwrite": true,
       "html": true,
       "json": false
    },
  chromeWebSecurity: false, 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
