describe('MyFirstTest',() => {
it ('MyFirsttest-loginpage',() => {
cy.visit ("https://opensource-demo.orangehrmlive.com/")
cy.get('input[name="username"]').type('Admin')
cy.get("input[type='password']").type('admin123')
cy.get('button[type="submit"]').click()
})
})