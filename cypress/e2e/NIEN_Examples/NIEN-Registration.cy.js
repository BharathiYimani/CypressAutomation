///<reference types="Cypress" />
///<reference types="cypress-iframe"/>
import 'cypress-iframe'
import registrationPage from "../NIEN-POM/NIEN-RegistrationPage"; //POM
import Form_SelectIndustries from "../NIEN-POM/RegistrationForm-selectIndustries"; 
describe('NIEN-Registration From Join',() => {
    let data;
beforeEach(() =>{
cy.visit('http://ec2-52-14-64-70.us-east-2.compute.amazonaws.com/login',{
         failOnStatusCode: false,timeout: 200000},
         // get predefined data from Fixture folder
cy.fixture('NIEN-SampleData').then((jsonData) => {
            data=jsonData
            })
)
 })

it('Register A Company', () => {
    const federalIDNumber = parseInt(data.FederalIDNumber); // Explicitly parse the string to an integer
    const ZIP =parseInt(data.ZIP)
    const RegistrationPage = new registrationPage()
    const SelectIndustry_Checkbox = new Form_SelectIndustries()
    const Phone=parseInt(data.Phone)
    const Ext=parseInt(data.Ext)
        //const CellNumber=parseInt(data.CellNumber)
        RegistrationPage.getClick_Joinbtn().contains('Join').click()
        RegistrationPage.getScroll().scrollIntoView()
        RegistrationPage.getRegisterbtn_Click().contains('Register').click({ timeout: 20000 })
       RegistrationPage.getHeader_validation().contains('Company')
        RegistrationPage.getCompanyName().type(data.companyName) //use fixtures to enter data
       // RegistrationPage.getFederalIDNumber().type(data.FederalIDNumber),wrong because we are passing a number
       RegistrationPage.getFederalIDNumber().type(federalIDNumber.toString());
// Complete command code is written in support folder for selection of Industry check boxes and using fixture data below is the code 
       data.Industry.forEach(function(element)
   {
 cy.selectIndustry(element)
   })
// To select Business type from dropdown
RegistrationPage.getBusinessType().select(data.BusinessType1)
// To enter website address
RegistrationPage.getWebsiteAddress().type(data.WebsiteAddress)
//Location-Address1
RegistrationPage.getLocation_Address1().type(data.Address1).scrollIntoView({
    block: 'nearest',
    })
// Enter Address2 -non mandatory field
RegistrationPage.getLocation_Address2().type(data.Address2)
// Enter values in State/City/ZipCode
RegistrationPage.getLocation_City().type(data.City)
RegistrationPage.getLocation_State().select('DE')
RegistrationPage.getLocation_Zip().type(ZIP.toString())
//cy.get('.ng-pristine.ng-invalid.ng-touched > :nth-child(2) > :nth-child(2) > div.ng-star-inserted > .form-control').type(data.Address2)
RegistrationPage.getFirstLastName().type(data.FirstLastName)
RegistrationPage.getJobDescription().type(data.TitleJobDescription)
RegistrationPage.getEmailAddress().type(data.Email)
RegistrationPage.getConfirmAddress().type(data.ConfirmEmail)
RegistrationPage.getPhoneNumber().type(Phone.toString())
RegistrationPage.getExtension().type(Ext.toString())
RegistrationPage.getEnterCell().type(data.CellNumber)
// //Industry Reference
//cy.get('.margin-bottom-5 > :nth-child(1) > .col-form-label').should('be.visible')
SelectIndustry_Checkbox.getAssociate_IndustryValidation().contains('Aerospace').should('be.visible');
     cy.get(':nth-child(1) > .ml-0 > .margin-right-5').check().should('be.checked')
     SelectIndustry_Checkbox.getIndustryReferenceOverlay().should('not.exist')

     SelectIndustry_Checkbox.getAssociate_IndustryValidation().contains('Demo').should('be.visible');
     cy.get(':nth-child(3) > .ml-0 > .margin-right-5').check().should('be.checked')
     SelectIndustry_Checkbox.getIndustryReferenceOverlay().should('not.exist')
     SelectIndustry_Checkbox.getAssociate_IndustryValidation().contains('WASDA').should('be.visible');
//     // Click on the "No" radio button
   cy.get(':nth-child(5) > :nth-child(2) > .margin-right-5').check().should('be.checked')
   SelectIndustry_Checkbox.getIndustryReferenceOverlay().should('be.visible')
   // Industry Reference Overlay-Reference1
   //cy.get('.ng-invalid.ng-dirty > :nth-child(1) > :nth-child(2) > div.ng-star-inserted > .form-control').type('Company-New')
cy.get(':nth-child(1) > nien-overlay-form-content > form.ng-pristine > div.ng-pristine > :nth-child(1) > :nth-child(2) > div.ng-star-inserted > .form-control').type('Company001')
cy.get('[formarrayname="references"] > :nth-child(1) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(2) > :nth-child(2) > div.ng-star-inserted > .form-control').type('Sandton')
cy.get('[formarrayname="references"] > :nth-child(1) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(3) > :nth-child(2) > div.ng-star-inserted > .form-control').type('Rivonia-East')
cy.get('.ng-invalid.ng-dirty > :nth-child(4) > [style="display: grid; grid-template-columns: 140px 78px auto; column-gap: 10px;"] > :nth-child(1) > .form-control').type('Sandownhills')
cy.get('.ng-invalid.ng-dirty > :nth-child(4) > [style="display: grid; grid-template-columns: 140px 78px auto; column-gap: 10px;"] > :nth-child(2) > .form-control').select('AK')
cy.get('.ng-invalid.ng-dirty > :nth-child(4) > [style="display: grid; grid-template-columns: 140px 78px auto; column-gap: 10px;"] > :nth-child(3) > .form-control').type('12345')
cy.get('[formarrayname="references"] > :nth-child(1) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(5) > :nth-child(2) > div.ng-star-inserted > .form-control').type('MCAM-001')
cy.get('.ng-invalid.ng-dirty > :nth-child(6) > :nth-child(2) > div.ng-star-inserted > .form-control').type(data.Email)
cy.get('.ng-invalid.ng-dirty > :nth-child(7) > [style="display: grid; grid-template-columns: 198px 20px auto; column-gap: 10px;"] > :nth-child(1) > .form-control').type('1234567890')
cy.get('div.ng-dirty > :nth-child(7) > [style="display: grid; grid-template-columns: 198px 20px auto; column-gap: 10px;"] > :nth-child(3) > .form-control').type('12345678')
 // Industry Reference Overlay-Reference2
cy.get('div.ng-untouched > :nth-child(1) > :nth-child(2) > div.ng-star-inserted > .form-control').type('Company002')
cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(2) > :nth-child(2) > div.ng-star-inserted > .form-control').type('Lenasia')
cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(3) > :nth-child(2) > div.ng-star-inserted > .form-control').type('RoseBank-SA')
cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(4) > [style="display: grid; grid-template-columns: 140px 78px auto; column-gap: 10px;"] > :nth-child(1) > .form-control').type('Mini-Sandton')
cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(4) > [style="display: grid; grid-template-columns: 140px 78px auto; column-gap: 10px;"] > :nth-child(2) > .form-control').select('CT')
cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(4) > [style="display: grid; grid-template-columns: 140px 78px auto; column-gap: 10px;"] > :nth-child(3) > .form-control').type('93056')
cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(5) > :nth-child(2) > div.ng-star-inserted > .form-control').type('MCAM-002')
cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(6) > :nth-child(2) > div.ng-star-inserted > .form-control').type(data.Email)
cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(7) > [style="display: grid; grid-template-columns: 198px 20px auto; column-gap: 10px;"] > :nth-child(1) > .form-control').type('2000567890')
 cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-dirty > div.ng-dirty > :nth-child(7) > [style="display: grid; grid-template-columns: 198px 20px auto; column-gap: 10px;"] > :nth-child(3) > .form-control').type('11114567')
cy.get('.margin-top-15 > .margin-left-10').click()
cy.get('.referenceCompleteText').should('be.visible')
cy.get('.green-tick-mark').should('be.visible')
cy.get(':nth-child(5) > :nth-child(2) > .btn').should('be.visible').contains('Edit')
//cy.get(':nth-child(6) > .margin-left-10').click()
// Click on the "Submit" button in the second div

// cy.get('div.d-flex.flex-wrap.align-content-center.justify-content-end')
//   .eq(2) // Selects the second div (index 1)
//   .find('button[type="submit"]')
//   .contains('Submit')
// cy.get(':nth-child(6) > .margin-left-10')
//   .click({force:true});
cy.get(':nth-child(6) > .margin-left-10').click({ force: true }).then(() => {
    // Assertion to ensure that the submit button is clicked
    // You may want to add a class or some identifier to the button after it's clicked
    // Here, I'll assume the button gets an 'clicked' class after clicking
    cy.wait(3000)
    cy.get(':nth-child(6) > .margin-left-10').should('exist')
   
    // Check for the presence of the confirmation overlay
    cy.get('#registerconfirmationverlay').should('be.visible')

    // Check for the confirmation message text
    cy.get('.delModalContent').should('contain', 'Thank You for Registering')

    // Check for the continue button and click it
    cy.get('.btn.btn-primary.nien-btn-primary').click()
});
  // to disable recaptcha
})
  it('Submit Form with Mocked reCAPTCHA', () => {
    cy.intercept('POST', '**/recaptcha/api2/userverify*', (req) => {
        // Mock a successful reCAPTCHA verification response
        req.reply({
            statusCode: 200,
            body: {
                success: true
                // Add any other properties as needed
            }
        }).as('recaptchaVerification');
    });
    

    // Intercept the reCAPTCHA verification request
    // cy.intercept('POST', 'https://www.google.com/recaptcha/api2/userverify?k=6Ld3Z2UeAAAAAMYOTE7EKBs_herFiqRZcTI1sKRT', (req) => {
    //     // Mock a successful reCAPTCHA verification response
    //     req.reply({
    //         statusCode: 200,
    //         body: {
    //             success: true
    //         }
    //     });
    // }).as('recaptchaVerification');
    // cy.wait('@recaptchaVerification').then((interception) => {
    //     // Check if reCAPTCHA verification was successful
    //     expect(interception.response.body.success).to.be.true;

    //     // Now proceed with the form submission
    //     // For example:
    //     // cy.get('form').submit();
    // });

    // // Click on the submit button to trigger the reCAPTCHA
    // cy.get('div.d-flex.flex-wrap.align-content-center.justify-content-end')
    //     .eq(2)
    //     .find('button[type="submit"]')
    //     .contains('Submit')
    //     .click();

    // Wait for the reCAPTCHA verification request to be intercepted
    
    // Continue with form submission and confirmation check
    // ...
    // cy.get('div.d-flex.flex-wrap.align-content-center.justify-content-end')
    // .eq(2)
    // .find('button[type="submit"]')
    // .contains('Submit')
    // .click({force: true});
    // cy.get('.h2.margin-bottom-20').should('exist')
    // cy.get('.delModalContent').contains("Thank You for Registering")
});

})












//   it('Register A Company (with Mocked reCAPTCHA)', () => {
//     // Stub the reCAPTCHA verification request
//     cy.intercept('POST', '/recaptcha/api/siteverify', (req) => {
//         // Assuming successful reCAPTCHA verification
//         req.reply({
//             statusCode: 200,
//             body: {
//                 success: true
//             }
//         });
//     }).as('recaptchaVerification');

//     // Click on the submit button to trigger the reCAPTCHA
//     cy.get('div.d-flex.flex-wrap.align-content-center.justify-content-end')
//         .eq(2)
//         .find('button[type="submit"]')
//         .contains('Submit')
//         .click();

//     // Wait for the reCAPTCHA verification request to be intercepted
//     cy.wait('@recaptchaVerification').then((interception) => {
//         // Check if reCAPTCHA verification was successful
//         expect(interception.response.body.success).to.be.true;

//         // Now proceed with the form submission
//         // ...
//     });

//     // Continue with form submission and confirmation check
//     // ...
// });
//cy.get('[style="margin: 0px auto; top: 0px; left: 0px; right: 0px; position: fixed; border: 1px solid rgb(204, 204, 204); z-index: 2000000000; background-color: rgb(255, 255, 255); width: 400px; height: 580px;"] > iframe').click()
  // // Wait for reCAPTCHA iframe to appear
  //  cy.get('iframe[title="recaptcha challenge expires in two minutes"]')
  //  .then($iframe => {
  //     const iframeContentWindow = $iframe.prop('contentWindow');
  //   const iframeContentDocument = iframeContentWindow.document;

  // //     // Wait for the reCAPTCHA checkbox to appear
  //  cy.wrap(iframeContentDocument).find('.recaptcha-checkbox-checkmark', { timeout: 10000 }).should('exist');

  // //     // Click on the reCAPTCHA checkbox to solve the challenge
  // //     cy.wrap(iframeContentDocument).find('.recaptcha-checkbox-checkmark').click();
  // // });
  //Trial-2
  //  cy.get('iframe[title="recaptcha challenge expires in two minutes"]')
  //     .should('exist')
  //     .then($iframe => {
  // // Get the document of the iframe
  // const iframeDoc = $iframe.contents();
  // // Wait for the reCAPTCHA checkbox to appear
  // cy.wrap(iframeDoc).find('.recaptcha-checkbox-checkmark',{timeout:5000}).should('be.visible');
  // // Click on the reCAPTCHA checkbox to solve the challenge
  // cy.wait(3000)
  // //cy.wrap(iframeDoc).find('.recaptcha-checkbox-checkmark').click();
     
       //
// //Trial-1
// cy.get('iframe[title="recaptcha challenge expires in two minutes"]').then($iframe => {
// //   //Now you have access to the iframe DOM element
//   const iframeDoc = $iframe.contents()
//   // Now you can find the reCAPTCHA checkbox and assert its existence
//   cy.wrap(iframeDoc)
//   .find('.recaptcha-checkbox-checkmark', { timeout: 20000 })
//   .should('exist');

// // Once the correct images are selected, click the "Verify" button
// cy.wrap(iframeDoc)
//   .find('#recaptcha-verify-button', { timeout: 10000 })
//   .should('exist')
//   .click();
 //cy.wait(5000);

  // Now you should be able to click the submit button again
  // cy.get('div.d-flex.flex-wrap.align-content-center.justify-content-end')
  //     .eq(2)
  //     .find('button[type="submit"]')
  //     .contains('Submit')
  //     .click({force: true});

  // Wait for confirmation popup message
 // cy.get('.h2.margin-bottom-20').should('exist')
 // cy.get('..delModalContent').contains("Thank You for Registering")
  //cy.get('.registration-confirm', {timeout: 30000}).should('exist');
//   cy.get('.registration-confirm', {timeout: 80000})
//   .should('exist')
//   .then(($element) => {
//       // Log the confirmation message text
//       const message = $element.text();
//       cy.log('Confirmation message:', message);
//   });
// // the below brackets are for describe and it 
//  })

// })
// })





 

