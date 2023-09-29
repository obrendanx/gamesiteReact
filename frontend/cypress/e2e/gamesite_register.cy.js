describe('User Registering', () => {
    it('navigates to the register page', () => {
        cy.visit('http://localhost:3000/')
        cy.contains('Register').click();
    })

    it('enters no details', () => {
        cy.visit('http://localhost:3000/register');
        cy.get('input[type="submit"]').click();
        
        cy.contains('Username must be between 6 and 14 characters and contain only letters and numbers').scrollIntoView().should('be.visible');
        cy.contains('Password must be at least 8 characters and contain uppercase, lowercase, numbers, and symbols').scrollIntoView().should('be.visible');
        cy.contains('Email must be a valid email address').scrollIntoView().should('be.visible');
        cy.contains('Full name must contain only letters and spaces').scrollIntoView().should('be.visible');
    });

    it('enters incorrect register details', () => {
        cy.visit('http://localhost:3000/register');
        cy.get('input[placeholder="Username: "]').type('incorrect username');
        cy.get('input[placeholder="Full Name: "]').type('incorrect fullname$');
        cy.get('input[placeholder="Email: "]').type('incorrect email');
        cy.get('input[placeholder="Password: "]').type('incorrect password');
        cy.get('input[type="submit"]').click();

        cy.contains('Username must be between 6 and 14 characters and contain only letters and numbers').scrollIntoView().should('be.visible');
        cy.contains('Password must be at least 8 characters and contain uppercase, lowercase, numbers, and symbols').scrollIntoView().should('be.visible');
        cy.contains('Email must be a valid email address').scrollIntoView().should('be.visible');
        cy.contains('Full name must contain only letters and spaces').scrollIntoView().should('be.visible');
    });

    it('submits a request to the endpoint', () => {
        cy.intercept("POST", "http://localhost:5001/signup", {
            statusCode: 200,
        }).as("passuser")

        // Visit the registration page
        cy.visit('http://localhost:3000/register');

        // Fill in the form fields with valid data
        cy.get('input[placeholder="Username: "]').type('testuser');
        cy.get('input[placeholder="Full Name: "]').type('test user');
        cy.get('input[placeholder="Email: "]').type('testuser@test.com');
        cy.get('input[placeholder="Password: "]').type('TestUser12.');

        // Submit the form
        cy.get('input[type="submit"]').click();
        cy.contains('Login Here').should('be.visible');
    });

    it('submits a failed request 404', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Returning false prevents Cypress from failing the test due to unhandled exceptions
            return false;
        });

        cy.intercept("POST", "http://localhost:5001/signup", {
            statusCode: 404,
        }).as("failuser")

        // Visit the registration page
        cy.visit('http://localhost:3000/register');

        cy.get('input[placeholder="Username: "]').type('testuser');
        cy.get('input[placeholder="Full Name: "]').type('test user');
        cy.get('input[placeholder="Email: "]').type('testuser@test.com');
        cy.get('input[placeholder="Password: "]').type('TestUser12.');

        cy.get('input[type="submit"]').click();

        cy.wait(3000);
        cy.contains('Resource not found (404)').should('be.visible');
    });

    it('submits a failed request 500', () => {
        cy.intercept("POST", "http://localhost:5001/signup", {
            statusCode: 500,
        }).as("failuser")

        // Visit the registration page
        cy.visit('http://localhost:3000/register');

        cy.get('input[placeholder="Username: "]').type('testuser');
        cy.get('input[placeholder="Full Name: "]').type('test user');
        cy.get('input[placeholder="Email: "]').type('testuser@test.com');
        cy.get('input[placeholder="Password: "]').type('TestUser12.');

        cy.get('input[type="submit"]').click();
        cy.wait(3000);
        cy.contains('Internal server error (500)').should('be.visible');
    });
})
