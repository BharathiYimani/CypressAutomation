///<reference types='Cypress'/>
describe('My Test-2', () =>
{

    // Requirement:After adding items to cart, place order and navigate to page "choose a country"page and do validations


it('My test',()=> {

// Hit the url 
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
//cy.wait(4000)
//cy.get('.products:invisible').find('.product').should('have.length',4)
cy.get('.products').find('.product').eq(5).contains('ADD TO CART').click()
cy.get('a.cart-icon').click()
cy.contains('PROCEED TO CHECKOUT').click()
cy.contains('Place Order').click()


})
})