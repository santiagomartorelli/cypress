const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);

  // Adding the following lines to include the mochawesome reporter
  require("cypress-mochawesome-reporter/plugin")(on);
  config.reporter = "cypress-mochawesome-reporter";
  config.reporterOptions = {
    jsonReport: "mochawesome-report.json",
    reportDir: "mochawesome-report",
    reportTitle: "Test Run Report",
    reportPageTitle: "Custom Report Title",
    charts: true,
    inline: true,
    theme: "dark"
  };

  return config;
}

module.exports = defineConfig({
  viewportWidth: 2048,
  viewportHeight: 1152,
  projectId: 'moa34p',
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/features/**/*.feature',
    baseUrl: 'https://www.gardensavvy.com',
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
  },
});