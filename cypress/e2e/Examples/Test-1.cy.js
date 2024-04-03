
/// <reference types="Cypress" />
describe('My First Project', () =>{
    it ('MyFirsttest-loginpage',() => {
    
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    // to get all the products starts with ca in the cart
    cy.get('.search-keyword').type('ca')
    //to get the size of the products that means how many items with 'ca' are there in the cart
// length is a property 
// we need to apply wait before getting length of products
cy.wait(6000)
// :visisble > will display products which are visible and length of products will be exactly matching with the 
//cy.get('.product:visible').should('have.length',4)
    // instead of :visible method use parent-child chaining method to get all products within the parent element

    // .products we are calling multiple times , so we can use alais and give a string
    cy.get('products').as('productlocator')
    cy.get('@productlocator').find('.product').should('have.length',4)

    // to clcik Add to cart btn of 3rd product 

    cy.get('@productlocator').find('.product').eq(3).contains('ADD TO CART').click()

    // Requirement: If we want to get the product by name like capsicum and add to cart, use method 'each' and compare text, iterate over an array
   
    cy.get('@productlocator').find('.product').each(($el, index, $list) => {
        // $el is a wrapped jQuery element)
        const textVeg=$el.find('h4.product-name').text()  
        // .text() is not cypress command but still in the line it worked because, first the cypress commands.get() .Find()  were resolved as per promise
       if(textVeg.includes('Carrot'))
       {
        //$el.find('button').trigger("click")
        // Note: for new version- click() won't work with find command , so use cy,wrap method
        cy.wrap($el).find('button').click()

        // Requirement: using assertion companre the test 'Greenkart' is correctly displayed

        cy.get('.brand').should('have.text','GREENKART')
        // Requirement: Get the text of logo to print in test runner information

    cy.get('.brand').then(function(logoelement)
    {
        cy.log(logoelement.text())
    })

         }
    })
})

})