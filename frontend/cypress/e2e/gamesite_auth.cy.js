describe('User Logging In', () => {
  it('navigates to the login page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Login').click();
  })

  it('enters in incorrect user details', () => {
    cy.visit('http://localhost:3000/login')
    cy.get('input[placeholder="Username: "]').type('incorrect username');
    cy.get('input[placeholder="Email: "]').type('incorrect@email.com');
    cy.get('input[placeholder="Password: "]').type('incorrect password');
    cy.get('input[type="submit"]').click();

    cy.contains('Please check your username and password').should('be.visible');
  })

  it('submits a failed request', () => {
    cy.intercept("POST", "http://localhost:5001/signin", {
        statusCode: 404,
    }).as("failuser")

    cy.visit('http://localhost:3000/login');

    cy.get('input[placeholder="Username: "]').type('incorrect username');
    cy.get('input[placeholder="Email: "]').type('incorrect@email.com');
    cy.get('input[placeholder="Password: "]').type('incorrect password');
    cy.get('input[type="submit"]').click();
    cy.contains('Please check your username and password').should('be.visible', { timeout: 10000 });
  });

  it('signs the user in', () => {
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
    cy.contains("Edit Profile").should('be.visible');
    cy.contains("PROFILE PAGE >").should('be.visible');
  }); 

  it('enters no details', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[type="submit"]').click();

    cy.contains('username, email or password is missing').should('be.visible');
  })

  it('can logout of their profile', () => {
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

    cy.wait(3000);

    cy.contains('Logout').click();
    cy.get('button').click();

    cy.contains('Login Here').should('be.visible');
    Cypress.removeListener('uncaught:exception', () => {});
  })
})
