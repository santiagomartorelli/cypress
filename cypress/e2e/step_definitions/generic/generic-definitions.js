import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";
import GenericActions from '../generic/actions/generic-actions';
import { paths } from 'cypress/config/urlpaths.json';


Given(/^I am on "([^"]*)"$/, function (url) {
  GenericActions.openUrl(url);
});

Given(/^I navigate to the "([^"]*)" page$/, function (path) {
  cy.wrap(paths[path]).as('component');
  cy.visit(paths[path]);
});

Given(/^I navigate to the "(\/.*)" page of (flatrate\.com|gardensavvy\.com)$/, (path, url) => {
  cy.visit(`https://${url}${path}`);
  cy.wait(3000);
});

When(/^I wait for "([^"]*)" second(?:s)$/, function (seconds) {
  cy.wait(seconds * 1000);
});

Then(/^I wait for the "([^"]*)" from the "([^"]*)" to be visible$/, function (element, page) {
  GenericActions.validateThatElementIsDisplayed(element, page);
});

When(/^I click "([^"]*)" on "([^"]*)"$/, function (element, page) {
  GenericActions.clickOnElement(element, page);
});

When(/^I type "([^"]*)" in the "([^"]*)" field on "([^"]*)"$/, function (text, element, page) {
  GenericActions.fillInputField(text, element, page);
});

Then(/^I validate that the "([^"]*)" from the "([^"]*)" reads "([^"]*)"$/, function (element, page, expectedText) {
  GenericActions.validateExpectedTextOnElement(element, page, expectedText);
});

Then(/^I validate that the "([^"]*)" from the "([^"]*)" is displayed$/, function (element, page) {
  GenericActions.validateThatElementIsDisplayed(element, page);
});

Then(/^I validate that the webpage url is "([^"]*)"$/, function (url) {
  GenericActions.validateWebPageUrl(url);
});

Then(
  /^I validate that "([^"]*)" from "([^"]*)" has a "([^"]*)" attribute with the "([^"]*)" value$/,
  function (element, page, expectedAttribute, expectedValue) {
    GenericActions.validateExpectedElementAttribute(element, page, expectedAttribute, expectedValue);
  }
);

Then(/^I validate that the "([^"]*)" from the "([^"]*)" is clickable$/, function (element, page) {
  GenericActions.expectElementToBeClickable(element, page);
});

When(/^I scroll to the "([^"]*)" from the "([^"]*)"$/, function (element, page) {
  GenericActions.scrollToElement(element, page);
});

Then(/^I wait for the "([^"]*)" from the "([^"]*)" to disappear$/, function (element, page) {
  GenericActions.waitForElementToDisappear(element, page);
});

Then(
  /^I validate that the "([^"]*)" from the "([^"]*)" opens "([^"]*)" in a new browser tab$/,
  function (element, page, newTabUrl) {
    GenericActions.expectNewTabToHaveBeenOpened(element, page, newTabUrl);
  }
);

Then(/^I wait for the request aliased as "([^"]*)" to $/, function (alias) {
  GenericActions.waitForRequest(alias);
});

Then(/^I validate that the status code stored under the "([^"]*)" key is "([^"]*)"$/, function (key, statusCode) {
  GenericActions.validateResponseStatus(key, statusCode);
});

When(/^I send an API request with the following params:$/, function (dataTable) {
  let requestData = dataTable.rowsHash();
  let method = requestData.method;
  let url = requestData.url;
  let headers = requestData.headers;
  let body = requestData.body;
  let key = requestData.key;
  GenericActions.sendRequest(method, url, headers, body, key);
});

When(/^I store the "([^"]*)" text from the "([^"]*)" inside "([^"]*)" property$/, function (element, page, key) {
  GenericActions.storeElementText(element, page, key);
});

Then(
  /^I validate the "([^"]*)" text from the "([^"]*)" is identical to the "([^"]*)" property stored earlier$/,
  function (element, page, key) {
    GenericActions.getStoredElementText(element, page, key);
  }
);
