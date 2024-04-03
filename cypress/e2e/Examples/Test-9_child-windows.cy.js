///<reference types="cypress" />
describe("Dropdowns -Test cases", () => {
    it('Dropdown Test',() =>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.wait(60000)
// as when a new tab is opened and cypress annot access/recognise that, instead of opening in new tab we can open it in same window 
// By using invoke method
cy.get('#opentab').invoke('removeAttr','target').click()
// to perform actions in the child window , we need to give url using origin-method not visit method and call a function
// Using 'Parent-child chaining method we can click on Home/About us/ .... any of hyperlinks in child window
cy.origin("https://www.qaclickacademy.com",()=>
       {
        cy.get("#navbarSupportedContent a[href*='about']").click()
        cy.get(".mt-50 h2").should('contain','QAClick Academy')
 
       })

    })
})