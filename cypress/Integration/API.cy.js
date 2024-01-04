// Task Description
// We need to test REST API back-end of the user's app in development.
// Base URL:   https://reqres.in
// (1) List all users
// Endpoint: /api/users?page=2
// (2) Show info about user with ID = 2
// Endpoint: /api/users/{id}
// (3) Create a user:
// Endpoint: /api/users
// Use this JSON:
// {
//     "name": "John",
//     "job": "Tester"
// }
// (4) Erase the user with ID = 2
// Endpoint: /api/users/{id}
// (5) Try to register unsuccessfully:
// Endpoint: /api/register
// Use this JSON:
// {
//     "email": "test@qa"
// }




describe("List all users", () => {
    it("should return a list of users", () => {
        cy.request("GET", "https://reqres.in/api/users?page=2").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("data").to.be.an("array");
        });
    });
});


describe("Show info about user with ID = 2", () => {
    it("should return user details for ID = 2", () => {
        cy.request("GET", "https://reqres.in/api/users/2").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("data");
            expect(response.body.data.id).to.eq(2);
        });
    });
});


describe("Create a user", () => {
    it("should create a new user", () => {
        const userData = {
            name: "John",
            job: "Tester",
        };

        cy.request("POST", "https://reqres.in/api/users", userData).then((response) => {
            expect(response.status).to.eq(201); // 201 indicates successful creation
            expect(response.body).to.have.property("name").to.eq("John");
            expect(response.body).to.have.property("job").to.eq("Tester");
        });
    });
});

describe("Erase the user with ID = 2", () => {
    it("should delete the user with ID = 2", () => {
        cy.request("DELETE", "https://reqres.in/api/users/2").then((response) => {
            expect(response.status).to.eq(204); // 204 indicates successful deletion
        });
    });
});

describe("Try to register unsuccessfully", () => {
    it("should return an error for invalid registration", () => {
        const invalidUserData = {
            email: "test@qa",
        };

        cy.request({
            method: "POST",
            url: "https://reqres.in/api/register",
            failOnStatusCode: false, // Prevent Cypress from failing on non-2xx responses
            body: invalidUserData,
        }).then((response) => {
            expect(response.status).to.not.eq(200); // Ensure it's not a successful response
            expect(response.body).to.have.property("error").to.eq("Missing email or username");
        });
    });
});
