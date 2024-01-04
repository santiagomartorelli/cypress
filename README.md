# cypress-cucumber-e2e-testing

<img src="https://media-exp1.licdn.com/dms/image/C4E0BAQF1dg2KtKFdPg/company-logo_200_200/0/1626295436859?e=2159024400&v=beta&t=Ib_T9PXXQxkHRKnj3Oe65EKuR6EAh01IgAA6IGvU0FY" alt="exemplo imagem">

> Cypress 10+ with Cucumber project.

### 💻 Topics

Integrated with:

- [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor): A Cypress plugin that enables Gherkin-style feature files and step definitions for BDD testing.
- [Cypress ESBuild Preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor): A preprocessor for Cypress tests that uses ESBuild to speed up test execution.
- [Mochawesome](https://www.npmjs.com/package/mochawesome): A reporter for Mocha test framework that generates attractive HTML reports.
- [Esbuild](https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples): Esbuild is a blazing fast JavaScript bundler and minifier, which can be leveraged to optimize your Cypress project's build process.


- ## 💻 Pre-requisites

Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).

## 🚀 Install the project

Install project dependencies with: npm i

## Run the tests:

1. Standard Execution: npm run cypress:execution (Headless mode) - This will generate the Mochawesome report.
2. npx cypress run --record --key YOUR_CYPRESS_CLOUD_KEY (to Run and save report in cypress cloud)
4. 'npx cypress open' will open the test runner

📂 Folder Structure
Place your feature files in the cypress/integration directory.
Define your step definitions in the cypress/support/step_definitions directory.
Store fixtures and other assets in the cypress/fixtures directory.


