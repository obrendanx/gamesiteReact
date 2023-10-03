it('searches for a user with just one letter', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent Cypress from failing the test
        return false;
    });

    // Intercept the login request and return mock data
    cy.intercept('POST', '**/login', {
        fixture: 'loginData.json', // Fixture for /login endpoint
    }).as('loginRequest');

    // Intercept the /fetchusers request and return mock user data
    cy.intercept('GET', '**/fetchusers', {
        fixture: 'usersData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUsersRequest');

    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder="Username: "]').type('adminuser');
    cy.get('input[placeholder="Email: "]').type('admin@admin.com');
    cy.get('input[placeholder="Password: "]').type('Zx56Tt407.9s');
    cy.get('input[type="submit"]').click();

    // Wait for both the login and fetchusers requests to complete
    cy.wait(['@loginRequest', '@fetchUsersRequest']);

    cy.wait(2000);

    // Check if the profile page elements are visible
    cy.get('input[placeholder="Search for a user: "]').type('o');

    cy.contains("obrendanx").should('be.visible');
    cy.contains("carol").should('be.visible');
});

it('searches for a user and views their profile', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent Cypress from failing the test
        return false;
    });

    // Intercept the login request and return mock data
    cy.intercept('POST', '**/login', {
        fixture: 'loginData.json', // Fixture for /login endpoint
    }).as('loginRequest');

    // Intercept the /fetchusers request and return mock user data
    cy.intercept('GET', '**/fetchusers', {
        fixture: 'usersData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUsersRequest');

    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder="Username: "]').type('adminuser');
    cy.get('input[placeholder="Email: "]').type('admin@admin.com');
    cy.get('input[placeholder="Password: "]').type('Zx56Tt407.9s');
    cy.get('input[type="submit"]').click();

    // Wait for both the login and fetchusers requests to complete
    cy.wait(['@loginRequest', '@fetchUsersRequest']);

    cy.wait(2000);

    // Check if the profile page elements are visible
    cy.get('input[placeholder="Search for a user: "]').type('o');

    // Intercept the /fetchusers request and return mock user data
    cy.intercept('GET', '**/showuserposts?username=obrendanx', {
      fixture: 'postsData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserPosts');

    cy.intercept('GET', '**/fetchuser?username=obrendanx', {
      fixture: 'fetchOtherUserData.json',
    }).as('fetchUser');

    cy.contains("obrendanx").click();

    cy.contains("obrendanx").should('be.visible');
    cy.contains("Brendans posts:").should('be.visible');
    cy.contains("Brendans favourite anime:").should('be.visible');
    cy.contains("remove post").should('not.exist');
});

it('searches for themselve and views their profile', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent Cypress from failing the test
        return false;
    });

    // Intercept the login request and return mock data
    cy.intercept('POST', '**/login', {
        fixture: 'loginData.json', // Fixture for /login endpoint
    }).as('loginRequest');

    // Intercept the /fetchusers request and return mock user data
    cy.intercept('GET', '**/fetchusers', {
        fixture: 'usersData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUsersRequest');

    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder="Username: "]').type('adminuser');
    cy.get('input[placeholder="Email: "]').type('admin@admin.com');
    cy.get('input[placeholder="Password: "]').type('Zx56Tt407.9s');
    cy.get('input[type="submit"]').click();

    // Wait for both the login and fetchusers requests to complete
    cy.wait(['@loginRequest', '@fetchUsersRequest']);

    cy.wait(2000);

    // Check if the profile page elements are visible
    cy.get('input[placeholder="Search for a user: "]').type('adminuser');

    // Intercept the /fetchusers request and return mock user data
    cy.intercept('GET', '**/showuserposts?username=adminuser', {
      fixture: 'postsData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserPosts');

    cy.intercept('GET', '**/fetchuser?username=adminuser', {
      fixture: 'fetchUserData.json',
    }).as('fetchUser');

    cy.contains("adminuser").click();

    cy.contains("adminuser").should('be.visible');
    cy.contains("Brendan Ewens posts:").should('be.visible');
    cy.contains("Brendan Ewens favourite anime:").should('be.visible');
    cy.contains("remove post").should('be.visible');
});
