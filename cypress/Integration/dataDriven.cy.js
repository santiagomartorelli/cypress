const testData = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' },
    { username: 'user3', password: 'wrongpass' }
];

describe('Data-Driven Login Test', () => {
    testData.forEach((data) => {
        it(`should attempt login with username: ${data.username}`, () => {
            cy.visit('http://example.com/login');
            cy.get('input[name="username"]').type(data.username);
            cy.get('input[name="password"]').type(data.password);
            cy.get('form').submit();
        });
    });
});
