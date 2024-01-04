describe('Dynamic Table Content Verification', () => {
    beforeEach(() => {
        cy.visit('https://testpages.eviltester.com/styled/tag/dynamic-table.html');
    });

    it('verify the H1 title', () => {
        cy.get('h1').should('contain', 'Dynamic HTML TABLE Tag');

    });

    it('should verify the content of all rows and columns in the table', () => {
        // Check if the table is visible
        cy.get('#dynamictable').should('be.visible');

        // Iterate over each row in the table
        cy.get('#dynamictable tr').each(($row, rowIndex) => {
            // Select all cells (th or td) in the current row
            cy.wrap($row).find('th, td').each(($cell, columnIndex) => {
                // Example: Log the text content of each cell
                cy.wrap($cell).invoke('text').then((text) => {
                    cy.log(`Row: ${rowIndex} Column: ${columnIndex} Content: ${text}`);
                });
            });
        });
    });
});
