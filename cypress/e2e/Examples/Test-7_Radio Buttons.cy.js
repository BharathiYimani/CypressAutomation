///<reference types="cypress" />
describe('Radio Buttons-Test', () =>{
it('Test-7', () =>{
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.wait(6000)
cy.get('.radioButton').check().should('be.checked').and('have.value','radio1')
//cy.get('.radioButton').uncheck().should('not.be.checked')
})
})