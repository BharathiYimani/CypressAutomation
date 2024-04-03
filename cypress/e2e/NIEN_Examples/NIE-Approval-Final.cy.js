///<reference types="cypress" />
import BO_Approval from "../NIEN-POM/BO-Registration-Approval";
//import ConfirmationOverlay from "../NIEN-POM/NIE-Approval-confirm";

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
        // Login with Admin credentials
        const BOApproval = new BO_Approval();
       // const confirmationOverlay = new ConfirmationOverlay();

        BOApproval.getUsername().scrollIntoView().type(data.AdminCred, { force: true });
        BOApproval.getPassword().type(data.AdminPassword, { force: true });
        BOApproval.getLoginBtn().click({ timeout: 2000 });

        // Click on Menu- Company
        cy.get('.loading-spinner').should('not.exist', { timeout: 3000 });
        cy.get('ul.navbar-nav')
            .contains('Company')
            .parent()
            .next()
            .find('a')
            .click({ force: true });

        // Search for a company
        cy.get('.table tr td:nth-child(3) input[placeholder="search"]').type('Automat');
        cy.get('.text-highlight').should('be.visible')
            .then(($elements) => {
                $elements.each((index, element) => {
                    const text = Cypress.$(element).text();
                    cy.log(`Partial text match found: ${text}`);
                });
            });

        cy.get('.table tr td:nth-child(3) input[placeholder="search"]').clear().type('FinalAutomat.Co.in-001');//company already registered "FinalAutomat.Co.in-001"
        cy.get('.scrollable-content', { timeout: 20000 }).contains('FinalAutomat.Co.in-001');

        // Click on the Approve button,** here id value dynamically changes from company to company
        cy.get('tr[id="3062a0f8-5660-45ba-93d8-e0fb89618d1f"]').within(() => {
            cy.get('.mat-menu-trigger > .nien-pl-5', { timeout: 15000 }).click();
        });

        // Wait for the overlay to be displayed
        cy.get('.mat-menu-content > button:nth-child(2)').contains('Approved').click({ force: true });

        // Wait for the confirmation overlay to be displayed
        cy.get('.approvalApproveOverlay', { timeout: 20000 }).should('be.visible');
          // Validate the text on the confirmation overlay
    cy.get('.cdk-drag').should('contain.text', 'FinalAutomat.Co.in-001');

    // Click on the continue button to proceed
    cy.get('.contBtn').click();

        // Handle the confirmation overlay
        //confirmationOverlay.handleConfirmationOverlay();
    });
});
