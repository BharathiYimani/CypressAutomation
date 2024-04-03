///<reference types="cypress" />
describe('NIEN Login Page-URL', () => 
{
 it('Login Page url', () =>
{
  cy.visit('http://ec2-52-14-64-70.us-east-2.compute.amazonaws.com/login', {
  failOnStatusCode: false,
  })

})
it('Enter User_Credentials', () => {
    // Wait for the element to be visible and interactable
    cy.get("#user-name", { timeout: 10000 }).should('be.visible').should('be.enabled').type('nien.verify01@gmail.com')
    
    // Wait for the input field with placeholder 'Enter Password' to be visible and interactable
    //cy.get("input[placeholder='Enter Password']", { timeout: 10000 }).should('be.visible').should('be.enabled').type('Techgrit123')
    
    // Wait for the login button to be visible and interactable
   // cy.get('button[type="submit"]', { timeout: 10000 }).should('be.visible').should('be.enabled').contains('login').click()
})
//it('Enter User_Credentials', () =>
//{
  //  cy.get("#user-name").type('nien.verify01@gmail.com')
  //  cy.get("input[placeholder='Enter Password']").type('Techgrit123')
  //  cy.get('button[type="submit"]').contains('login').click()

//})

})