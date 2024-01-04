describe('Accessibility Testing', () => {
    it('should have no accessibility violations', () => {
        cy.visit('https://example.com');
        cy.injectAxe();
        cy.checkA11y();
    });
});