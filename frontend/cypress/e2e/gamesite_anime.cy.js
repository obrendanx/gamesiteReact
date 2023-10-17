it('successfully updates the episode of a favourite anime', () => {
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
    cy.intercept('GET', '**/userfavorites?username=adminuser', {
        fixture: 'animeData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserAnime');

    cy.intercept('GET', '**/fetchuser?username=adminuser', {
        fixture: 'fetchUserData.json',
    }).as('followRequest');

    cy.contains("PROFILE PAGE >").click();

    cy.contains("THE LAST NARUTO THE MOVIE").should('be.visible');
    cy.contains("Current Episode:").should('be.visible');
    cy.contains("Current Season:").should('be.visible');
    cy.contains("Season: 3").should('be.visible');
    cy.contains("Episode: 7").should('be.visible');
    cy.get('input[placeholder="Current Episode: 7"]').should('be.visible');
    cy.get('input[placeholder="Current Season: 3"]').should('be.visible');

    cy.intercept('PUT', '**/updateanime?username=adminuser&id=64dce5a1f1f327abf2631d17', {
        status: 200,
    }).as('updateEpisode');

    cy.get('input[placeholder="Current Episode: 7"]').type('9');
    cy.contains('Submit').click();
    cy.contains('Anime updated successfully!').should('exist');
}); 

it('fails to update the episode of a favourite anime', () => {
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
    cy.intercept('GET', '**/userfavorites?username=adminuser', {
        fixture: 'animeData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserAnime');

    cy.intercept('GET', '**/fetchuser?username=adminuser', {
        fixture: 'fetchUserData.json',
    }).as('followRequest');

    cy.contains("PROFILE PAGE >").click();

    cy.get('.Toastify__toast-container').should('be.visible');

    cy.contains("THE LAST NARUTO THE MOVIE").should('be.visible');
    cy.contains("Current Episode:").should('be.visible');
    cy.contains("Current Season:").should('be.visible');
    cy.contains("Season: 3").should('be.visible');
    cy.contains("Episode: 7").should('be.visible');
    cy.get('input[placeholder="Current Episode: 7"]').should('be.visible');
    cy.get('input[placeholder="Current Season: 3"]').should('be.visible');

    cy.intercept('PUT', '**/updateanime?username=adminuser&id=64dce5a1f1f327abf2631d17', {
        forceNetworkError: true,
    }).as('updateEpisode');

    cy.get('input[placeholder="Current Episode: 7"]').type('9');
    cy.contains('Submit').click();
    cy.contains('Error updating anime!').should('exist');
}); 

it('successfully updates the season of a favourite anime', () => {
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
    cy.intercept('GET', '**/userfavorites?username=adminuser', {
        fixture: 'animeData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserAnime');

    cy.intercept('GET', '**/fetchuser?username=adminuser', {
        fixture: 'fetchUserData.json',
    }).as('followRequest');

    cy.contains("PROFILE PAGE >").click();

    cy.contains("THE LAST NARUTO THE MOVIE").should('be.visible');
    cy.contains("Current Episode:").should('be.visible');
    cy.contains("Current Season:").should('be.visible');
    cy.contains("Season: 3").should('be.visible');
    cy.contains("Episode: 7").should('be.visible');
    cy.get('input[placeholder="Current Episode: 7"]').should('be.visible');
    cy.get('input[placeholder="Current Season: 3"]').should('be.visible');

    cy.intercept('PUT', '**/updateanime?username=adminuser&id=64dce5a1f1f327abf2631d17', {
        status: 200,
    }).as('updateEpisode');

    cy.get('input[placeholder="Current Season: 3"]').type('9');
    cy.contains('Submit').click();
    cy.contains('Anime updated successfully!').should('exist');
}); 

it('fails to update the season of a favourite anime', () => {
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
    cy.intercept('GET', '**/userfavorites?username=adminuser', {
        fixture: 'animeData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserAnime');

    cy.intercept('GET', '**/fetchuser?username=adminuser', {
        fixture: 'fetchUserData.json',
    }).as('followRequest');

    cy.contains("PROFILE PAGE >").click();

    cy.get('.Toastify__toast-container').should('be.visible');

    cy.contains("THE LAST NARUTO THE MOVIE").should('be.visible');
    cy.contains("Current Episode:").should('be.visible');
    cy.contains("Current Season:").should('be.visible');
    cy.contains("Season: 3").should('be.visible');
    cy.contains("Episode: 7").should('be.visible');
    cy.get('input[placeholder="Current Episode: 7"]').should('be.visible');
    cy.get('input[placeholder="Current Season: 3"]').should('be.visible');

    cy.intercept('PUT', '**/updateanime?username=adminuser&id=64dce5a1f1f327abf2631d17', {
        forceNetworkError: true,
    }).as('updateEpisode');

    cy.get('input[placeholder="Current Season: 3"]').type('9');
    cy.contains('Submit').click();
    cy.contains('Error updating anime!').should('exist');
}); 

it('successfully updates the episode and season of a favourite anime', () => {
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
    cy.intercept('GET', '**/userfavorites?username=adminuser', {
        fixture: 'animeData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserAnime');

    cy.intercept('GET', '**/fetchuser?username=adminuser', {
        fixture: 'fetchUserData.json',
    }).as('followRequest');

    cy.contains("PROFILE PAGE >").click();

    cy.contains("THE LAST NARUTO THE MOVIE").should('be.visible');
    cy.contains("Current Episode:").should('be.visible');
    cy.contains("Current Season:").should('be.visible');
    cy.contains("Season: 3").should('be.visible');
    cy.contains("Episode: 7").should('be.visible');
    cy.get('input[placeholder="Current Episode: 7"]').should('be.visible');
    cy.get('input[placeholder="Current Season: 3"]').should('be.visible');

    cy.intercept('PUT', '**/updateanime?username=adminuser&id=64dce5a1f1f327abf2631d17', {
        status: 200,
    }).as('updateEpisode');

    cy.get('input[placeholder="Current Episode: 7"]').type('9');
    cy.get('input[placeholder="Current Season: 3"]').type('9');
    cy.contains('Submit').click();
    cy.contains('Anime updated successfully!').should('exist');
}); 

it('fails to update the episode and season of a favourite anime', () => {
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
    cy.intercept('GET', '**/userfavorites?username=adminuser', {
        fixture: 'animeData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserAnime');

    cy.intercept('GET', '**/fetchuser?username=adminuser', {
        fixture: 'fetchUserData.json',
    }).as('followRequest');

    cy.contains("PROFILE PAGE >").click();

    cy.get('.Toastify__toast-container').should('be.visible');

    cy.contains("THE LAST NARUTO THE MOVIE").should('be.visible');
    cy.contains("Current Episode:").should('be.visible');
    cy.contains("Current Season:").should('be.visible');
    cy.contains("Season: 3").should('be.visible');
    cy.contains("Episode: 7").should('be.visible');
    cy.get('input[placeholder="Current Episode: 7"]').should('be.visible');
    cy.get('input[placeholder="Current Season: 3"]').should('be.visible');

    cy.intercept('PUT', '**/updateanime?username=adminuser&id=64dce5a1f1f327abf2631d17', {
        forceNetworkError: true,
    }).as('updateEpisode');

    cy.get('input[placeholder="Current Episode: 7"]').type('9');
    cy.get('input[placeholder="Current Season: 3"]').type('9');
    cy.contains('Submit').click();
    cy.contains('Error updating anime!').should('exist');
}); 