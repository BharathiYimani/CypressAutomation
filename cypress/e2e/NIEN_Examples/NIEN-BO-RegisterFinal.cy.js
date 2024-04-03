///<reference types="cypress" />

//import { timeout } from "async"

describe('NIEN Login Page', () => {
    beforeEach(() => {
        cy.visit('http://ec2-52-14-64-70.us-east-2.compute.amazonaws.com/login', {
            failOnStatusCode: false,timeout: 200000}
    )
    })
it('should login with valid credentials', () => {
       //cy.get('.loading-spinner').should('not.exist')
    cy.get('input[placeholder="Enter Email Address"]').scrollIntoView().type('nien.verify01@gmail.com',{force:true})
    cy.get(".padding-top-5 > .col-sm-8 > .form-control").type('Techgrit123',{force:true})
    // Submit login form
    cy.get('.col-sm-12 > .btn').contains('Login').click({timeout:2000})
      //Click on Menu
    cy.get('.loading-spinner').should('not.exist',{timeout:3000})
    cy.get('ul.navbar-nav')  // Select the navbar navigation list
    .contains('Company')   // Look for the link containing text 'Company'
    .parent()              // Go to the parent of the link, which should be the <li> element
    .next()                // Select the next sibling, assuming the "Dashboard" link is the next sibling
    .find('a')             // Find the <a> element within the next sibling
    .click({force:true})   // Click on the link
    // Click on +Company button
    cy.get('.text-right.mt-2.mr-4 button[type="button"]').click({timeout:8000})
    cy.get('#cdk-overlay-0 [formcontrolname="companyName"]').type('FinalAutomat.Co.in-001')
    cy.get('.w-441 input[placeholder="Enter Federal ID Number"]').type('38-7493879')
    // Industry selection
    cy.get('.checkboxesDiv').find(':nth-child(4) > .radio > :nth-child(1)').check().should('be.checked')// Aerospace IND
    cy.get('.checkboxesDiv').find(':nth-child(4) > .radio > .ng-star-inserted').check().should('be.checked')// Association
    // Select by refering to industry name 2nd one
   // cy.get('.checkboxesDiv').scrollIntoView({timeout:2000})
    cy.get('.checkboxesDiv').find(':nth-child(16) > .radio > :nth-child(1)').scrollIntoView().check().should('be.checked')// ind
    //Show validation
    cy.get('.new-text').should('contain', '2 References Required')
    cy.get('.checkboxesDiv').find(':nth-child(16) > .radio > .ng-star-inserted').scrollIntoView().check().should('be.checked')//association
    // validation to be removed
    cy.get('.new-text').should('not.exist')
    // select business type dropdown
    cy.get('select[formcontrolname="businessType"]').select('Manufacturer',{timeout:10000})
    // select yes radio btn for certification of exemption
    cy.get('#SOER-yes-radio').check().should('be.checked')
    //website
    cy.get('input[placeholder="Enter Website Address"]').type('www.google.com')
    //address1
    cy.get('input[formcontrolname="addressLine1"]').type('SandownHills,Nxt to The Capital')
    //address2
    cy.get('input[formcontrolname="addressLine2"]').type('Rivonia,Morning Side')
    // City
    cy.get('input[formcontrolname="city"]').type('Rivonia,Morning Side')
    //State
    cy.get('select[formcontrolname="state"]').select('AZ',{timeout:10000})
    //zip
    cy.get('input[formcontrolname="zip"]').type('12345')
    // First & Last name
    cy.get('input[formcontrolname="name"]').type('Rajani')
    //Tile
    cy.get('input[formcontrolname="title"]').type('MCAM')
    //email validation -valid email address into the input field
    const validEmail = 'mcam-finalAuto001@yopmail.com'; 
    const invalidEmail = 'Invalidemail';
    const InvalidConfirmEmail = 'Confirm-email@yopmail.com';
    cy.get('input[formcontrolname="email"]').type(invalidEmail)
    cy.get('input[formcontrolname="confirmemail"]').type(InvalidConfirmEmail)
    cy.get('input[formcontrolname="email"]').siblings('.invalid-feedback').click().should('contain','Invalid')
    cy.get('input[placeholder="Confirm Email"]').siblings('.invalid-feedback').should('contain',' Email fields do not match ')
     cy.get('input[formcontrolname="email"]').clear().type(validEmail)
     cy.get('input[formcontrolname="confirmemail"]').clear().type(validEmail)
     //phone no
cy.get('input[placeholder="Enter Phone Number"]').type('1234567890')
cy.get('input[placeholder="Enter Ext"]').type('12345666') 

cy.get('input[formcontrolname="mobile"]').type('1234567890')

cy.get('.margin-bottom-5 > .justify-content-end > .margin-left-10').click({force:true})
cy.get('.mat-simple-snackbar',{timeout:2000}).should('exist').contains('Successfully')
cy.log('Form submitted and closed successfully');
    //
    // describe and it closings 
  })
  })