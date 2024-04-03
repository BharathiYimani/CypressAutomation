describe('MyFirstNIENTest',() => {
    it ('MyFirsttest-loginpage',() => {
    cy.visit ("http://niendevweb01.int.nationalinventoryexchange.com/home")
    //cy.wait(80000)
    cy.get("input[type='password']").type('nien.verify01@gmail.com')
    cy.get("input[placeholder='Enter Password']").type('Techgrit123')
    cy.get('button[type="submit"]').contains('login').click()
    })
    })