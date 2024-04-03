beforeEach( function() {
    cy.fixture('Example-AngularPractice').then((jsonData) => {
    data=jsonData
    })

    // e.g., in your EcommStepDefinition.js or any other Cypress support file
   //cy.clearLocalStorage();
    //cy.clearCookies();
  })
  

    