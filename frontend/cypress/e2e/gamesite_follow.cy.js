it('the user unfollows someone', () => {
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

    // Check if the profile page elements are visible
    cy.get('input[placeholder="Search for a user: "]').type('o');

    // Intercept the /fetchusers request and return mock user data
    cy.intercept('GET', '**/showuserposts?username=obrendanx', {
      fixture: 'postsData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserPosts');

    cy.intercept('GET', '**/fetchuser?username=obrendanx', {
      fixture: 'fetchOtherUserData.json',
    }).as('fetchUser');

    cy.intercept('GET', '**/followers/obrendanx', {
        fixture: 'beforeUnfollow.json', // Fixture for /followers/adminuser endpoint
    }).as('followersRequest');

    cy.intercept('POST', '**/unfollow/obrendanx', {
        fixture: 'unfollowSuccess.json', // Fixture for /followers/adminuser endpoint
    }).as('unfollowRequest');

    cy.contains("obrendanx").click();

    cy.wait(5000);

    cy.contains('Unfollow').click();
    cy.contains('You have unfollowed this user.');
});

it('the user fails to unfollow someone', () => {
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

    // Check if the profile page elements are visible
    cy.get('input[placeholder="Search for a user: "]').type('o');

    // Intercept the /fetchusers request and return mock user data
    cy.intercept('GET', '**/showuserposts?username=obrendanx', {
      fixture: 'postsData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserPosts');

    cy.intercept('GET', '**/fetchuser?username=obrendanx', {
      fixture: 'fetchOtherUserData.json',
    }).as('fetchUser');

    cy.intercept('GET', '**/followers/obrendanx', {
        fixture: 'beforeUnfollow.json', // Fixture for /followers/adminuser endpoint
    }).as('followersRequest');

    cy.intercept('POST', '**/unfollow/obrendanx', {
        forceNetworkError: true,
    }).as('failedFollow');

    cy.contains("obrendanx").click();

    cy.contains('Unfollow').click();
    cy.contains('Failed to unfollow user');
});

it('the user follows someone', () => {
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

    // Check if the profile page elements are visible
    cy.get('input[placeholder="Search for a user: "]').type('o');

    // Intercept the /fetchusers request and return mock user data
    cy.intercept('GET', '**/showuserposts?username=obrendanx', {
      fixture: 'postsData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserPosts');

    cy.intercept('GET', '**/fetchuser?username=obrendanx', {
      fixture: 'fetchOtherUserData.json',
    }).as('fetchUser');

    cy.intercept('GET', '**/followers/obrendanx', {
        fixture: 'beforeFollow.json', // Fixture for /followers/adminuser endpoint
    }).as('followersRequest');

    cy.intercept('POST', '**/follow/obrendanx', {
        fixture: 'followSuccess.json', // Fixture for /followers/adminuser endpoint
    }).as('followRequest');

    cy.contains("obrendanx").click();

    cy.wait(5000);

    cy.contains('Follow').click();
    cy.contains('You are now following this user.');
});

it('the user fails to unfollow someone', () => {
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

    // Check if the profile page elements are visible
    cy.get('input[placeholder="Search for a user: "]').type('o');

    // Intercept the /fetchusers request and return mock user data
    cy.intercept('GET', '**/showuserposts?username=obrendanx', {
      fixture: 'postsData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserPosts');

    cy.intercept('GET', '**/fetchuser?username=obrendanx', {
      fixture: 'fetchOtherUserData.json',
    }).as('fetchUser');

    cy.intercept('GET', '**/followers/obrendanx', {
        fixture: 'beforeFollow.json', // Fixture for /followers/adminuser endpoint
    }).as('followRequest');

    cy.intercept('POST', '**/follow/obrendanx', {
        forceNetworkError: true,
    }).as('failedFollow');

    cy.contains("obrendanx").click();

    cy.contains('Follow').click();
    cy.contains('Failed to follow user');
});