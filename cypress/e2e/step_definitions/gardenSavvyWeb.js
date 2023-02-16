import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";

Then('I login as {string}', (email) => {
    cy.get('.col-lg-4 > .inf-login').click();
    cy.get('.login-form > :nth-child(2) > .form-control').type(email);
    cy.get('.login-form > :nth-child(3) > .form-control').type('Password1');
    cy.get('.sign-in > .btn').click();

});


Then('I should be redirected to the {string} page', (url) => {
    cy.wait(5000);
    cy.url().should('include', url);
});