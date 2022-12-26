# cypress-cucumber-e2e-testing

<img src="https://media-exp1.licdn.com/dms/image/C4E0BAQF1dg2KtKFdPg/company-logo_200_200/0/1626295436859?e=2159024400&v=beta&t=Ib_T9PXXQxkHRKnj3Oe65EKuR6EAh01IgAA6IGvU0FY" alt="exemplo imagem">

> Cypress 10+ with Cucumber project.

### 💻 Topics

Integrated with:

- [x] https://github.com/badeball/cypress-cucumber-preprocessor
- [x] https://github.com/bahmutov/cypress-esbuild-preprocessor
- [x] https://github.com/Shelex/cypress-allure-plugin

(+ esbuild: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples)

- ## 💻 Pre-requisites

1. Node JS
2. Java 8 for Allure Reporter
npm install -g allure-commandline (this installs the Allure command line interface (CLI) on your system to be able to run the allure:report script)

## 🚀 Install the project

Install project dependencies with: npm i

## Run the tests:

1. Standard Execution: npm run cypress:execution (Headless mode)
2. npx cypress run --record --key 79a2f67d-4a82-41f1-9e71-18da72899e8b (to Run and save report in cypress cloud)
3. Allure Report: 
   1. npm run cypress:execution-allure
   2. npm run allure:report
   3. allure open
