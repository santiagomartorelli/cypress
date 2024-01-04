describe('Test 1', () => {
    it('testing', () => {
        cy.visit('https://testpages.herokuapp.com/styled/basic-html-form-test.html');
        cy.get('h1').should('have.text', 'Basic HTML Form Example');
        cy.get('p').contains("Submit this simple HTML form will POST your details to be processed by another part of the application and shown on a results page.");
        cy.get('[value="cb3"]').should('be.checked');
        // cy.get('input[name="checkboxes[]"][value="cb3"]').should('be.checked');
        cy.get('[value="rd2"]').should('be.checked');
        cy.get('select[name="multipleselect[]"]').select('Selection Item 1');
        cy.get('select[name="dropdown"]').select('Drop Down Item 3');
    });
});