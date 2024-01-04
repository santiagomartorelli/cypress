import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";

Given('I open Google search page', () => {
    cy.visit('https://www.google.com');
});

When('I search for {string}', (query) => {
    cy.get('[name="q"]').type(query);
    cy.get('[name="q"]').type('{enter}');
});

Then('I should see results related to {string}', (query) => {
    cy.get('#search').should('contain', query);
});
