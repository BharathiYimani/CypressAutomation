//rahulshetty angular practice webpage-validations
///<reference types='Cypress' />
// We have to import Homepage here

import HomePage from "../Ex-PageObjectModel/POM-Homepage";
describe('Validations', () => {
let data; // data is set globally
beforeEach( () => {
cy.fixture('Example-AngularPractice').then((jsonData) => {
data=jsonData
})
})
//test case starts for validations
// validation of entered input value , displayed at Two-way Data Binding example:  or not

it('Validation-1', () => {
  const homePage =new HomePage()
    cy.visit("https://rahulshettyacademy.com/angularpractice/")

    homePage.getEdiBox().type(data.name)
    homePage.getGender().select(data.gender)
    // validate Two-way Data Binding example: field
    homePage.getTwowayDataBinding().should('have.value',data.name)
    // Validation-2: for min length =2 in name input field
    homePage.getEditBox().should('have.attr','minlength','2')
    //validation-3: to validate whether Entrepreneur radio btn is disabled or not
   homePage.getEntrepreneurRadiobtn().should('be.disabled')
   //cypress.config('defaultCommandTimeout',8000)
    // Customizes a new command using support folder 
  homePage.getClickonShop().click() 
  // to clcik on shop btn
    //now customise a command in support page to select any random product like nokia/blueberry/... and click
    //cy.selectProduct('Nokia Edge')
    //cy.selectProduct('Samsung Note 8')

    // as we have multiple values to added under productName we use array by adding square brackets
   // javascript array concept to be used here

   data.productName.forEach(function(element)
   {
 cy.selectProduct(element)
   })
   // describe and it  closings
})
  
})