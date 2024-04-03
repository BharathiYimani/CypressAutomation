/// <reference types="Cypress" />
 
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
//Check boxes
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
//cy.get('div.mouse-hover-content').invoke('show')
cy.contains('Top').click({force: true})// we have to give force:true, so that the hidden one will be shown
cy.url().should('include','top')
})
 
 
})