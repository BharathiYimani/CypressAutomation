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
//Industry Reference
SelectIndustry_Checkbox.getAssociate_IndustryValidation({timeout:4000}).contains('Aerospace').should('be.visible');
cy.get(':nth-child(1) > .ml-0 > .margin-right-5').check().should('be.checked')
SelectIndustry_Checkbox.getIndustryReferenceOverlay().should('not.exist')
SelectIndustry_Checkbox.getAssociate_IndustryValidation().contains('Demo').should('be.visible');
cy.get(':nth-child(3) > .ml-0 > .margin-right-5').check().should('be.checked')
SelectIndustry_Checkbox.getIndustryReferenceOverlay().should('not.exist')
SelectIndustry_Checkbox.getAssociate_IndustryValidation().contains('WASDA').should('be.visible');
// Click on the "No" radio button
cy.get(':nth-child(5) > :nth-child(2) > .margin-right-5').check().should('be.checked')
SelectIndustry_Checkbox.getIndustryReferenceOverlay().should('be.visible') //industry reference overlay
// Industry Reference Overlay-Reference1
SelectIndustry_Checkbox.RefIndustry_1Companyname().type('Company001')
SelectIndustry_Checkbox.RefIndustry_1Address1().type('Sandton')
SelectIndustry_Checkbox.RefIndustry_1Address2().type('Sandownhills2')
SelectIndustry_Checkbox.RefIndustry_1City().type('SandtonCity-East')
SelectIndustry_Checkbox.RefIndustry_1State().select('AK')
SelectIndustry_Checkbox.RefIndustry_1Zip().type('12345')
SelectIndustry_Checkbox.RefIndustry_1contact().type('MCAM-001')
SelectIndustry_Checkbox.RefIndustry_1email().type(data.Email)
SelectIndustry_Checkbox.RefIndustry_1Phoneno().type('1234567890')
SelectIndustry_Checkbox.RefIndustry_1EXT().type('12345678')
// Industry Reference Overlay-Reference2
SelectIndustry_Checkbox.RefIndustry_2Companyname().type('Company002')
SelectIndustry_Checkbox.RefIndustry_2Address1().type('Sandton-1')
SelectIndustry_Checkbox.RefIndustry_2Address2().type('Sandownhills3')
SelectIndustry_Checkbox.RefIndustry_2City().type('SandtonCity-West')
SelectIndustry_Checkbox.RefIndustry_2State().select('AZ')
SelectIndustry_Checkbox.RefIndustry_2Zip().type('12333')
SelectIndustry_Checkbox.RefIndustry_2contact().type('MCAM-002')
SelectIndustry_Checkbox.RefIndustry_2email().type(data.Email)
SelectIndustry_Checkbox.RefIndustry_2Phoneno().type('1234563390')
SelectIndustry_Checkbox.RefIndustry_2EXT().type('12340078')
cy.get('.margin-top-15 > .margin-left-10').click()
cy.get('.referenceCompleteText').should('be.visible')
cy.get('.green-tick-mark').should('be.visible')
cy.get(':nth-child(5) > :nth-child(2) > .btn').should('be.visible').contains('Edit')
// Submit Registration Form
// SelectIndustry_Checkbox.getRegisteration_Submitbtn().eq(2) // Selects the second div (index 1)at bottom of overlay
// .find('button[type="submit"]')
// .contains('Submit')
// .click();
cy.get(':nth-child(6) > .margin-left-10')
          .contains('Submit')
          .click({force: true})
          // confirm pop up
          cy.get('.registration-confirm', { timeout: 20000 }).should('be.visible');
   cy.get('.registration-confirm h2').should('contain.text','Confirmation')
//cy.get('.registration-confirm').should('contain.text','Thank You for Registering')
cy.get('.justify-content-end > .btn').click()

          //cy.pause()
})

          //Note:IMP!! Run in headless mode - so that this code will bypass Google Recaptcha
          
// it('googlecaptcha intercept', () =>{
//             cy.intercept('GET', 'https://www.google.com/recaptcha/api2/anchor*', (req) => {
//     // Log the intercepted request
//     console.log('Intercepted reCAPTCHA request:', req);

//     // Mock a successful reCAPTCHA verification response
//     req.reply({
//         statusCode: 200,
//         body: {
//             success: true
//             // Add any other properties as needed
//         }
//     }).as('recaptchaVerification');
// });

// // Trigger the reCAPTCHA challenge
// // Perform other actions, such as solving the reCAPTCHA challenge

// // Wait for the intercepted reCAPTCHA verification request to be completed
// cy.wait('@recaptchaVerification').then((interception) => {
//     // Log the intercepted response
//     console.log('Intercepted reCAPTCHA response:', interception.response);

//     // Proceed with the test actions after successful reCAPTCHA verification
// });




          })
       // })

        
//cy.get('.loading-spinner', { timeout: 10000 }).should('not.exist');

   //        cy.get(':nth-child(6) > .margin-left-10')
   //       .contains('Submit')
   //  .click({force: true});
    
    //cy.wait(5000)
    //cy.get('.h2.margin-bottom-20').should('exist')
    //cy.get('.delModalContent').contains("Thank You for Registering") 


 // Describe and it closings 

//Handling Google Recaptcha
// to disable recaptcha


//cy.get('div.d-flex.flex-wrap.align-content-center.justify-content-end', { timeout: 30000 }).should('exist');
  
      // Click on the submit button to trigger the reCAPTCHA
      // cy.get('div.d-flex.flex-wrap.align-content-center.justify-content-end',{timeout:4000})
      //     .eq(1)
      //     .find('button[type="submit"]')
      //     .contains('Submit')
      //     .click();
  
      // Further assertions...
  
   // Intercept the reCAPTCHA verification request
//    cy.intercept('POST', 'https://www.google.com/recaptcha/api2/userverify?k=6Ld3Z2UeAAAAAMYOTE7EKBs_herFiqRZcTI1sKRT', (req) => {
//        // Mock a successful reCAPTCHA verification response
//        req.reply({
//            statusCode: 200,
//            body: {
//                success: true
//            }
//        });
//    }).as('recaptchaVerification');

//    // Click on the submit button to trigger the reCAPTCHA
//    cy.get('.d-flex.margin-bottom-20 > .margin-left-10')
//        .eq(1)
//        .find('button[type="submit"]')
//        .contains('Submit')
//        .click();

//    // Wait for the reCAPTCHA verification request to be intercepted
//    cy.wait('@recaptchaVerification').then((interception) => {
//        // Check if reCAPTCHA verification was successful
//        expect(interception.response.body.success).to.be.true;

//        // Now proceed with the form submission
//        // For example:
//        // cy.get('form').submit();
//        cy.get('.d-flex.margin-bottom-20 > .margin-left-10')
//     .eq(1)
//     .find('button[type="submit"]')
//     .contains('Submit')
//     .click({force: true});
//     cy.wait(2000)
//     cy.get('.h2.margin-bottom-20').should('exist')
//cy.get('.registration-confirm', { timeout: 20000 }).should('be.visible');
//     cy.get('.registration-confirm h2').should('contain.text','Confirmation')
//cy.get('.registration-confirm').should('contain.text','Thank You for Registering')
//cy.get('.btn btn-primary nien-btn-primary d-flex flex-wrap justify-content-center ml-auto d-flex flex-wrap align-content-center').click()
//    });
// })
//  // Describe and it closings
// })

