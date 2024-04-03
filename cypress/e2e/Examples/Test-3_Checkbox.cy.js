///<reference types="cypress"/>

describe('Check Box Validations',() =>
{

it('My Test-3', () =>
{

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.wait(4000)

// Requirement: To select either one or more check boxes and uncheck them

// this code is wrong >cy.get('#checkBoxOption1').should('have.text','Option 1').check()

cy.get('#checkBoxOption1').check().should('be.checked')
// instead of using same assertion should , we can use '.and and validate the value
cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
// To unchek the check box
cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
// If we want to select multiple check boxes with their values in .check method
cy.get('input[type="checkbox"]').check(['option3','option2'])
cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
// To unchek the check box
cy.get('#checkBoxOption2').uncheck().should('not.be.checked')
// If we want to select multiple check boxes with their values in .check method
cy.get('input[type="checkbox"]').check(['option3','option2'])
// to uncheck all the selected checkboxes
cy.get('input[type="checkbox"]').uncheck()
})
})
