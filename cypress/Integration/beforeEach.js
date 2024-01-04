describe('Example.com Page Test', () => {
    beforeEach(() => {
        // Visiting the example website
        cy.visit('https://example.com');
    });

    it('should have the correct page title', () => {
        // Check if the title of the page is correct
        cy.title().should('eq', 'Example Domain');
    });

    it('should display the main heading', () => {
        // Check if the main heading is present and contains the correct text
        cy.get('h1').should('contain', 'Example Domain');
    });

    it('should have a descriptive paragraph', () => {
        // Check if there is a paragraph with descriptive text
        cy.get('p').should('exist');
    });

    it('should have a link to more information', () => {
        // Check if there is a link and it directs to the correct URL
        cy.get('a').should('have.attr', 'href', 'https://www.iana.org/domains/example');
    });
});