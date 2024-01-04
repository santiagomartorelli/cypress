describe('Handle Browser Alert', () => {
    it('Should handle a browser alert', () => {
        cy.visit('https://www.example.com'); // Replace with the URL of the website you want to test

        // Trigger a browser alert (replace the selector with a real one from the website)
        cy.get('button#trigger-alert').click(); // Replace with a valid selector on the target website

        // Handle the browser alert
        cy.on('window:alert', (str) => {
            expect(str).to.equal('This is a browser alert.'); // Replace with the expected alert message
        });
    });
});
