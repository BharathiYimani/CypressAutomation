describe('LengthTest', () => {
    let length
    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    })
    it("When expected length is not known", () => {
        cy.get('.products').find('.product').then(($value) => {
            length = $value.length
        })
     })
    it("Printing length", () => {
        cy.log("*** length obtained is *** " + length)

    })
    //Using Cypress.$value.length
    let totalCount
   
    it.only("Using Cypress Method", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.products').find('.product').then((value) => {
        totalCount = Cypress.$(value).length;
        expect(value).to.have.length(totalCount);
    })
    it.only("Printing length => totalCount", () => {
        cy.log("*** length obtained is *** " + totalCount)
 
     })
})
 })
