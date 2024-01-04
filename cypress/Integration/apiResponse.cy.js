describe('API Response Verification', () => {
    it('should verify the /posts API endpoint', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts').then((response) => {

            expect(response.status).to.eq(200);

            expect(response.headers).to.have.property('content-type').and.include('application/json');

            expect(response.body).to.be.an('array');

            // Example: Verify the first post's structure
            expect(response.body[0]).to.have.all.keys('userId', 'id', 'title', 'body');

            // Example: Check specific values (if you know what values to expect)
            expect(response.body[0].userId).to.eq(1);
            expect(response.body[0].id).to.eq(1);
            expect(response.body[0].title).to.be.a('string');
        });
    });
});

