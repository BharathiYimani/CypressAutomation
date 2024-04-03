// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// Define a custom command in commands.js or any other Cypress support file
Cypress.Commands.add('clearCache', () => {
  cy.clearLocalStorage();
  cy.clearCookies();
  // Add additional cache clearing logic if needed
})

//Ecommerce-shoppingcart example
Cypress.Commands.add('selectProduct', (productName) => { 
    cy.get('h4.card-title').each(($el,index,$list) => {
        {if($el.text().includes(productName))
        cy.get('button.btn.btn-info').eq(index).click()
        }
        })
    })
// NIEN-industry selection check box
Cypress.Commands.add('selectIndustry', (Industry) => { 
    cy.get('.checkboxesDiv').within(() => {
        // Iterate over each sub div
        cy.get('.form-group.nien-h-13.d-flex.flex-wrap.align-content-center.margin-bottom-10.mt-0.ng-star-inserted').each(($subDiv) => {
          // Get the industry name from the label within the current sub div
          const industryName = $subDiv.find('.radio.radio-inline.d-flex.flex-wrap.align-content-center.nien-checkbox label').text().trim();
          
          // Check if the industry name matches the one from the fixture
          if (industryName.includes(Industry)) {
            // Find the checkbox input element
            const $checkbox = $subDiv.find('.radio.radio-inline.d-flex.flex-wrap.align-content-center.nien-checkbox input[type="checkbox"]');
            
            // Ensure the checkbox element exists
            if ($checkbox.length > 0) {
              // Check the checkbox
              //$checkbox.prop('checked', true).trigger('change');
              
              // Ensure the checkbox is checked
              //cy.wrap($checkbox).should('be.checked');
              cy.wrap($checkbox).check().should('be.checked')
            } else {
              // Log an error if the checkbox element is not found
              cy.log('Checkbox element not found within the sub div:', $subDiv);
            }
          }
        });
      });
    });
  

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///<reference types="Cypress"/>
///<reference types="cypress-xpath"/>