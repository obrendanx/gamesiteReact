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
    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder="Username: "]').type('adminuser');
    cy.get('input[placeholder="Email: "]').type('admin@admin.com');
    cy.get('input[placeholder="Password: "]').type('Zx56Tt407.9s');
    cy.get('input[type="submit"]').click();

    cy.wait(4000);

    cy.contains("Edit Profile").should('be.visible');
    cy.contains("PROFILE PAGE >").should('be.visible');
  })

  it('enters no details', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[type="submit"]').click();

    cy.contains('username, email or password is missing').should('be.visible');
  })

  it('can logout of their profile', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder="Username: "]').type('adminuser');
    cy.get('input[placeholder="Email: "]').type('admin@admin.com');
    cy.get('input[placeholder="Password: "]').type('Zx56Tt407.9s');
    cy.get('input[type="submit"]').click();

    cy.wait(3000);

    cy.contains('Logout').click();
    cy.get('button').click();

    cy.contains('Login Here').should('be.visible');
  })
})
