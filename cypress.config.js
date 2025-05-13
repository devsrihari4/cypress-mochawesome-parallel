//cypress.config.js

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // "reporter": "cypress-multi-reporters",
  // "reporterOptions": {
  //   "reporterEnabled": "mochawesome",
  //   "mochawesomeReporterOptions": {
  //     "reportDir": "cypress/reports",
  //     "overwrite": false,
  //     "html": false,
  //     "json": true
  //   }
  // },

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    // json: true
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});