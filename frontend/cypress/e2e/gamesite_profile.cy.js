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

  it('sees their favourite anime display', () => {
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
  }); 

  it('sees their username display in the main profile area', () => {
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

    cy.intercept('GET', '**/fetchuser?username=adminuser', {
      fixture: 'fetchUserData.json',
    }).as('followRequest');

    cy.contains("PROFILE PAGE >").click();

    cy.wait(5000);

    cy.contains("adminuser").should('be.visible');
  }); 

  it('clicks the edit profile button to update their details', () => {
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

    cy.intercept('GET', '**/fetchuser?username=adminuser', {
      fixture: 'fetchUserData.json',
    }).as('followRequest');

    cy.contains("Edit Profile").click();

    cy.contains("Full Name:Brendan Ewen").should('be.visible');
    cy.contains("Username:adminuser").should('be.visible');
    cy.contains("Email:admin@admin.com").should('be.visible');
    cy.contains("New Password:").should('be.visible');
    cy.contains("Retype Password:").should('be.visible');
  }); 

  it('gives a 200 for editing a user profile', () => {
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

    cy.intercept('GET', '**/fetchuser?username=adminuser', {
      fixture: 'fetchUserData.json',
    }).as('followRequest');

    cy.contains("Edit Profile").click();

    cy.get('input[placeholder="Username: "]').type('obrendanx');
    cy.get('input[placeholder="Fullname: "]').type('John Doe');
    cy.get('input[placeholder="Email: "]').type('adminuser@adminuser.com');
    cy.get('input[placeholder="New Password: "]').type('Zz47H.Aa5B');
    cy.get('input[placeholder="Retype Password: "]').type('Zz47H.Aa5B');

    cy.intercept('PUT', '**/updateuserdetails/adminuser', {
      status: 200,
    }).as('updateProfile');

    cy.contains("Submit").click();

    cy.contains("Profile Updated Successfully").should('be.visible');
  }); 

  it('gives a 404 for editing a user profile', () => {
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

    cy.intercept('GET', '**/fetchuser?username=adminuser', {
      fixture: 'fetchUserData.json',
    }).as('followRequest');

    cy.contains("Edit Profile").click();

    cy.get('input[placeholder="Username: "]').type('obrendanx');
    cy.get('input[placeholder="Fullname: "]').type('John Doe');
    cy.get('input[placeholder="Email: "]').type('adminuser@adminuser.com');
    cy.get('input[placeholder="New Password: "]').type('Zz47H.Aa5B');
    cy.get('input[placeholder="Retype Password: "]').type('Zz47H.Aa5B');

    cy.intercept('PUT', '**/updateuserdetails/adminuser', {
      forceNetworkError: true,
    }).as('failProfile');

    cy.contains("Submit").click();

    cy.contains("No Changes Made").should('be.visible');
  }); 

  it('gives invalid details for editing a user profile', () => {
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

    cy.intercept('GET', '**/fetchuser?username=adminuser', {
      fixture: 'fetchUserData.json',
    }).as('followRequest');

    cy.contains("Edit Profile").click();

    cy.get('input[placeholder="Username: "]').type('obrendanx &&');
    cy.get('input[placeholder="Fullname: "]').type('John Doe&& &&');
    cy.get('input[placeholder="Email: "]').type('adminuseradminuser.com');
    cy.get('input[placeholder="New Password: "]').type('Zz47sdsd');
    cy.get('input[placeholder="Retype Password: "]').type('Zz47H.Aa5B');

    cy.intercept('PUT', '**/updateuserdetails/adminuser', {
      status: 404,
    }).as('updateProfile');

    cy.contains("Submit").click();

    cy.contains("Username must be between 6 and 14 characters and contain only letters and numbers").scrollIntoView().should('be.visible');
    cy.contains("Password must be at least 8 characters and contain uppercase, lowercase, numbers, and symbols").scrollIntoView().should('be.visible');
    cy.contains("Email must be a valid email address").scrollIntoView().should('be.visible');
    cy.contains("Passwords do not match").scrollIntoView().should('be.visible');
    cy.contains("Full name must contain only letters and spaces").scrollIntoView().should('be.visible');
  }); 

  // it('deletes their post', () => {
  //   Cypress.on('uncaught:exception', (err, runnable) => {
  //     // Return false to prevent Cypress from failing the test
  //     return false;
  //   });

  //   // Intercept the login request and return mock data
  //   cy.intercept('POST', '**/login', {
  //     fixture: 'loginData.json', // Fixture for /login endpoint
  //   }).as('loginRequest');

  //   // Intercept the /fetchusers request and return mock user data
  //   cy.intercept('GET', '**/fetchusers', {
  //     fixture: 'usersData.json', // Fixture for /fetchusers endpoint
  //   }).as('fetchUsersRequest');

  //   cy.intercept('DELETE', '**/deletepost?id=*', {
  //       statusCode: 200, 
  //       // Simulate a successful deletion
  //   }).as('deletePostRequest');

  //   cy.visit('http://localhost:3000/login');
  //   cy.get('input[placeholder="Username: "]').type('adminuser');
  //   cy.get('input[placeholder="Email: "]').type('admin@admin.com');
  //   cy.get('input[placeholder="Password: "]').type('Zx56Tt407.9s');
  //   cy.get('input[type="submit"]').click();

  //   // Wait for both the login and fetchusers requests to complete
  //   cy.wait(['@loginRequest', '@fetchUsersRequest']);

  //   cy.wait(2000);

  //   // Check if the profile page elements are visible
  //   cy.contains("Edit Profile").should('be.visible');

  //   // Intercept the /fetchusers request and return mock user data
  //   cy.intercept('GET', '**/showuserposts?username=adminuser', {
  //     fixture: 'postsData.json', // Fixture for /fetchusers endpoint
  //   }).as('fetchUserPosts');

  //   cy.intercept('GET', '**/fetchuser?username=adminuser', {
  //     fixture: 'fetchUserData.json',
  //   }).as('followRequest');

  //   cy.contains("PROFILE PAGE >").click();

  //   cy.contains("test image").should('be.visible');
  //   cy.contains("test").should('be.visible');
  //   cy.contains("2023-08-11T20:52:35.902Z").should('be.visible');
  //   cy.contains("テスト").should('be.visible');
  //   cy.contains("テストこの写真はテストです").should('be.visible');
  //   cy.contains("2023-08-12T06:45:08.176Z").should('be.visible');
  //   cy.contains("remove post").should('be.visible');

  //   cy.contains("remove post").click();

  //   // Wait for the DELETE request to complete
  //   cy.wait('@deletePostRequest').then((interception) => {
  //     // Assert that the DELETE request returns a 200 status code (indicating successful deletion)
  //     expect(interception.response.statusCode).to.equal(200);

  //     // Modify the fixture file to remove the deleted post
  //     cy.readFile('../frontend/cypress/fixtures/postsData.json').then((postsData) => {
  //       const updatedData = postsData.data.filter(post => post.subject !== 'test image'); // Modify as needed
  //       cy.writeFile('../frontend/cypress/fixtures/postsData.json', { data: updatedData });
  //     });
  //   });
  // }); 