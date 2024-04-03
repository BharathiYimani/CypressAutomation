//<reference types="cypress" />
describe("Alerts/Popups -Test case", () => {
    // To select options from Static dropdown, where the values are constant
    it('Alert Test',() =>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.wait(3000)
    cy.get('#alertbtn').click()
    // to get the text from the alert
    // use window:Alert and on. behaviour method
    cy.on('window:alert',(str)=>
    {

        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    // alert for confirm 
    cy.get('input[value="Confirm"]').click()
    // to get the text from the alert
    cy.on('window:confirm',(str)=>{
    expect(str).to.equal('Hello , Are you sure you want to confirm?')

    })
    })
})