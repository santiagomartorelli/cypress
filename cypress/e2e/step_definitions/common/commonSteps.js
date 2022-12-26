import { commonMethods } from './commonMethods';

Then(/^I check page "([^"]*)" loaded$/, (expectedURLSnippet) => {
  commonMethods.validateUrl(expectedURLSnippet);
});

Then(/^I see the "([^"]*)" (h1|h2|h3|h4|p|div)$/, function (expText, typeText) {
  commonMethods.checkElementContainsExpectedText(typeText, expText);
});

When(/^I click "([^"]*)" button$/, function (btnText) {
  commonMethods.clickButtonWithText(btnText);
});

When(/^I click "([^"]*)" link$/, function (linkText) {
  commonMethods.clickLinkWithText(linkText);
});

Then(
  /^I (don't see|see) the "([^"]*)" (paragraph|heading|subheading|subsubheading|subsubsubheading|button|link|span)$/,
  (seeFlag, expText, typeText) => {
    commonMethods.verifyText(seeFlag, expText, typeText);
    cy.injectAxe();
  }
);

Then(/^I see the "([^"]*)" button links to "([^"]*)"$/, (expButtontext, expLink) => {
  commonMethods.checkButtonLinksToExpectedLink(expButtontext, expLink);
});


