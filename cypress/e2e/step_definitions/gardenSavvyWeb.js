import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";

Then('I should see the correct title', () => {
    cy.title('#welcome-sec > .section-title').should('include', 'Wrong title');
})
