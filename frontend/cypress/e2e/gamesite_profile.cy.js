it('sees their followers and following display', () => {
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

    cy.intercept('GET', '**/followers/adminuser', {
        fixture: 'followersData.json', // Fixture for /followers/adminuser endpoint
    }).as('followersRequest');

    cy.intercept('GET', '**/following/adminuser', {
        fixture: 'followingData.json', // Fixture for /followers/adminuser endpoint
    }).as('followingRequest');

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

    cy.contains("test1").should('be.visible');
    cy.contains("test2").should('be.visible');
    cy.contains("2").should('be.visible');
    cy.contains("test3").should('be.visible');
    cy.contains("test4").should('be.visible');
    cy.contains("test5").should('be.visible');
    cy.contains("3").should('be.visible');
  }); 

  it('sees their posts display', () => {
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

    // Intercept the /fetchusers request and return mock user data
    cy.intercept('GET', '**/showuserposts?username=adminuser', {
      fixture: 'postsData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserPosts');

    cy.intercept('GET', '**/fetchuser?username=adminuser', {
      fixture: 'fetchUserData.json',
    }).as('followRequest');

    cy.contains("PROFILE PAGE >").click();

    cy.contains("test image").should('be.visible');
    cy.contains("test").should('be.visible');
    cy.contains("2023-08-11T20:52:35.902Z").should('be.visible');
    cy.contains("テスト").should('be.visible');
    cy.contains("テストこの写真はテストです").should('be.visible');
    cy.contains("2023-08-12T06:45:08.176Z").should('be.visible');
    cy.contains("remove post").should('be.visible');
  }); 

  it('deletes their post', () => {
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

    // Intercept the /fetchusers request and return mock user data
    cy.intercept('GET', '**/showuserposts?username=adminuser', {
      fixture: 'postsData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserPosts');

    cy.intercept('GET', '**/fetchuser?username=adminuser', {
      fixture: 'fetchUserData.json',
    }).as('followRequest');

    cy.contains("PROFILE PAGE >").click();

    cy.contains("test image").should('be.visible');
    cy.contains("test").should('be.visible');
    cy.contains("2023-08-11T20:52:35.902Z").should('be.visible');
    cy.contains("テスト").should('be.visible');
    cy.contains("テストこの写真はテストです").should('be.visible');
    cy.contains("2023-08-12T06:45:08.176Z").should('be.visible');
    cy.contains("remove post").should('be.visible');

    cy.intercept('DELETE', '**/deletepost?id=*', {
        statusCode: 200, // Simulate a successful deletion
    }).as('deletePostRequest');

    cy.contains("remove post").click();
  }); 