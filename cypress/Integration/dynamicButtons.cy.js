describe('buttons testing', () => {

    it('click button', () => {
        cy.visit('https://testpages.eviltester.com/styled/dynamic-buttons-simple.html');
        cy.get('#button00').click();
        cy.get('#button01', { timeout: 10000 }).click();
        cy.get('#button02').should('be.visible').click();
        cy.get('#button03').should('be.visible').click();
        cy.get('#buttonmessage').contains('All Buttons Clicked');

    });

});