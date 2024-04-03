///<reference types="cypress" />
///<reference types="cypress-iframe"/>
import 'cypress-iframe'
describe('Iframe-Test-1', () => {
it('Test-1-Iframes', () => {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.frameLoaded('')

})

})