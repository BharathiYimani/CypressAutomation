///<reference types="cypress" />
import BO_Approval from "../NIEN-POM/BO-Registration-Approval";
import ConfirmationOverlay from "../NIEN-POM/NIE-Approval-confirm";

describe('Company Approval', () => {
    let data;

    beforeEach(() => {
        cy.visit('http://ec2-52-14-64-70.us-east-2.compute.amazonaws.com/login', {
            failOnStatusCode: false,
            timeout: 200000
        });
        cy.fixture('NIENAdminApproval').then((jsonData) => {
            data = jsonData;
        });
    });

    it("Admin Login to approve company", () => {
        // Login with Admin credential
        const BOApproval = new BO_Approval();
        const confirmationOverlay =new ConfirmationOverlay();
        BOApproval.getUsername().scrollIntoView().type(data.AdminCred, {
            force: true
        });
        BOApproval.getPassword().type(data.AdminPassword, {
            force: true
        });
        // Submit login form
        BOApproval.getLoginBtn().click({
            timeout: 2000
        });
        // Click on Menu- Company
        cy.get('.loading-spinner').should('not.exist', {
            timeout: 3000
        });
        cy.get('ul.navbar-nav') // Select the navbar navigation list
            .contains('Company') // Look for the link containing text 'Company'
            .parent() // Go to the parent of the link, which should be the <li> element
            .next() // Select the next sibling, assuming the "Dashboard" link is the next sibling
            .find('a') // Find the <a> element within the next sibling
            .click({
                force: true
            }); // Click on the link
        // Company Dashboard
        // in the table partial search company name
        cy.get('.table tr td:nth-child(3) input[placeholder="search"]').type('Automat');
        // Wait for the search results to load and check
        cy.get('.text-highlight').should('be.visible')
            .then(($elements) => {
                // Get the text of each matching element
                $elements.each((index, element) => {
                    const text = Cypress.$(element).text();
                    cy.log(`Partial text match found: ${text}`);
                });
            });
        cy.get('.table tr td:nth-child(3) input[placeholder="search"]').clear().type('Automat.Co.in-001');
        cy.get('.scrollable-content', {
            timeout: 20000
        }).contains('Automat.Co.in-001');
        cy.get('tr[id="751e1381-1a2b-4266-900f-f18f6ac2b980"]').within(() => {
            cy.get('.mat-menu-trigger > .nien-pl-5', {
                timeout: 15000
            }).click().then(() => {
                // Intercepting click events targeting elements outside the parent container
                cy.document().then((doc) => {
                    doc.addEventListener('click', (e) => {
                        const target = e.target;
                        // Check if the clicked element is outside the parent container
                        if (!target.closest('tr[id="751e1381-1a2b-4266-900f-f18f6ac2b980"]')) {
                            e.stopPropagation(); // Prevent the default action of the click event
                            e.preventDefault();
                        }
                    }, true);
                });
            });
        });
        // Approve/decline/pending overlay
        cy.get('.mat-menu-content > button:nth-child(2)').contains('Approved')
       .click({force:true}).then(() => {
        // Listen for a custom event
        cy.document().then((doc) => {
          doc.addEventListener('customOverlayDisplayed', () => {
            // Custom event handler: overlay is displayed
            // Perform assertions or additional actions
            cy.log('Overlay displayed');
          });
        });
      });
       
// Handling the confirmation overlay using the POM function
// Click the "Approved" button
 confirmationOverlay.handleConfirmationOverlay();

        //cy.get('#mat-dialog-0').contains('Confirmation').then(()=>{
//cy.get('.contBtn').click()
        })

       // cy.get('.cdk-drag > .align-content-center').find('.contBtn').click()
    //     .then(() => {
    //         // Debugging step: Log a message to confirm that the Approved button was clicked
    //         cy.log('Approved button clicked');
    //         // To avoid loader
    //     cy.get('.loading-spinner').should('not.exist',{timeout:3000})

    //     // Handling confirmation overlay
    //     cy.get('.cdk-global-overlay-wrapper .approvalApproveOverlay',{timeout:20000})
    //     //.within(() => {
    //         if (overlay.length > 0) {
    //             // Debugging step: Log a message to confirm that the overlay is found
    //             cy.log('Approval overlay found');

    //             // Interact with the overlay's elements
    //         cy.get('.contBtn').click(); // Clicking on the continue button
            
    //         // Debugging step: Log a message to confirm that the continue button was clicked
    //         cy.log('Continue button clicked');
    //     } else {
    //         // Debugging step: Log a message if the overlay is not found
    //         cy.log('Approval overlay not found');
    //     }
    // });
                
    //         //cy.get('.contBtn').click(); // Clicking on the continue button
        

        //closings
    });

