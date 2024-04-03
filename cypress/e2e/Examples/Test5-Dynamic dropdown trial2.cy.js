///<reference types="cypress" />
describe('Dynamic Dropdown-Test', () =>
{
  it('Trial-2', () =>
  {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.wait(6000)
    cy.get('#autocomplete').type('Mau')
    cy.get('.ui-menu-item div').each(($el,index,$list) =>{
    if($el.text()==='Mauritius')
    {
     cy.wrap($el).click()
    }
    })
  })  
})