///<reference types="cypress" />
describe('Visible-Invisible elements-Assertions', () =>{
it('Assertions-Test', () => {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.wait(6000)
// When we click on Hide the 'Hide/show Example placeholder is hidden , when we click on show-place holder should be displayed
// Thus the above is a behaviuor, so we neeed to use >be.visible in assertion and not.be.visisble
   cy.get('#displayed-text').should('be.visible')
   // for not visible
   cy.get('#hide-textbox').click()
   cy.get('#displayed-text').should('not.be.visible')
   //For visible
   cy.get('#show-textbox').click()
   cy.get('#displayed-text').should('be.visible')
})

})