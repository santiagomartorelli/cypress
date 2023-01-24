const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const slack = require('slack-notify')('https://hooks.slack.com/services/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');

//   configure the package with your Slack webhook URL
slack.onError = function (err) { console.error(err) };

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

  // This code will send a notification to your Slack channel when a test passes or fails.
  on('after:run', (test) => {
    if (test.state === 'failed') {
      slack.send({
        text: `Test ${test.title} failed`,
        channel: '#test-notifications',
        username: 'Cypress',
      });
    } else if (test.state === 'passed') {
      slack.send({
        text: `Test ${test.title} passed`,
        channel: '#test-notifications',
        username: 'Cypress',
      });
    }
  });

  // Make sure to return the config object as it might have been modified by the plugin.
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
