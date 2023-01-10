import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the homepage', () => {
    cy.visit('https://gardensavvy.com/')
})

When('I view the page', () => {
    // No action required
})

Then('I should see the correct title', () => {
    cy.title('#welcome-sec > .section-title').should('include', 'Garden Savvy');
})