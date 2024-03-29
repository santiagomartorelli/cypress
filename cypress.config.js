const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

async function setupNodeEvents(on, config) {
  console.log("reporter triggered");
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Adding the following lines to include the mochawesome reporter
  require('cypress-mochawesome-reporter/plugin')(on);
  config.reporter = "cypress-mochawesome-reporter";
  config.reporterOptions = {
    jsonReport: "mochawesome-report.json",
    reportDir: "mochawesome-report",
    reportTitle: "Cypress Test Report",
    reportPageTitle: "Lumina - Cypress Results",
    saveHtml: false,
    charts: true,
    inline: true,
    saveJson: true,
    theme: "dark"
  };
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  viewportWidth: 2048,
  viewportHeight: 1152,
  projectId: 'moa34p',
  e2e: {
    setupNodeEvents,
    specPattern: ['cypress/e2e/features/**/*.feature', 'cypress/integration/**/*.spec.js', 'cypress/integration/**/*.cy.js'],
    // baseUrl: 'https://www.gardensavvy.com',
    chromeWebSecurity: false,
  },
});