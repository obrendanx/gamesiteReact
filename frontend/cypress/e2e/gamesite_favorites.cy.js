it('searches for an anime', () => {
    cy.visit('http://localhost:3000/anime');
    cy.get('input[placeholder="Search: "]').type('naruto {enter}');
    cy.contains('ナルト').should('be.visible');
    cy.contains('Add to Favourites').should('be.visible');
});

it('favorites an anime whilst logged out', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Return false to prevent Cypress from failing the test
        return false;
    });

    cy.visit('http://localhost:3000/anime');
    cy.get('input[placeholder="Search: "]').type('naruto {enter}');
    cy.get('[data-cy="favorite"]').first().click();
    cy.contains('You must be logged in to favourite an anime').should('exist');
});

it('successfully favorites an anime', () => {
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

    cy.intercept('POST', '**/newanime', {
        fixture: 'newAnimeData.json',
        status: 200, // Fixture for /fetchusers endpoint
    }).as('successAnime');

    // Intercept the /fetchusers request and return mock user data
    cy.intercept('GET', '**/userfavorites?username=adminuser', {
        fixture: 'newAnimeData.json', // Fixture for /fetchusers endpoint
    }).as('fetchUserAnime');

    cy.visit('http://localhost:3000/login');
    cy.get('input[placeholder="Username: "]').type('adminuser');
    cy.get('input[placeholder="Email: "]').type('admin@admin.com');
    cy.get('input[placeholder="Password: "]').type('Zx56Tt407.9s');
    cy.get('input[type="submit"]').click();

    // Wait for both the login and fetchusers requests to complete
    cy.wait(['@loginRequest', '@fetchUsersRequest']);

    cy.wait(2000);

    cy.contains("Anime").click();
    cy.get('input[placeholder="Search: "]').type('naruto {enter}');

    cy.get('[data-cy="favorite"]').first().click();

    cy.wait(4000);
});

it('fails to favorite an anime', () => {

});

it('successfully removes a favorite', () => {

});

it('fails to remove a favorite', () => {

});