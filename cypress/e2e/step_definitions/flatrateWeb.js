import { Given, When, Then, } from "@badeball/cypress-cucumber-preprocessor";

Then('I set the date', () => {
    cy.get('#t-date').click();
    cy.get('.datepickerx--nav-action[data-action="next"]').click();
    cy.get('.datepickerx--cell-day').contains('15').click();
})

Then("I select the {string} option from the homesize dropdown", (option) => {
    cy.get('#select2-t-size-container').click();
    cy.get('.select2-results__options li').contains(option).click();
})

Then("I verify thank you message displays {string}", (option) => {
    cy.get('.col-lg-4 > h3').contains(option);
})


