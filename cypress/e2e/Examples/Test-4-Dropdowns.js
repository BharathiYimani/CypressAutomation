///<reference types="cypress" />
describe("Dropdowns -Test cases", () => {
// To select options from Static dropdown, where the values are constant
it('Dropdown Test',() =>{
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.wait(6000)
//cy.get('#dropdown-class-example').select('option1')
// or the other way to select dropdown box is not by id name , by tag name
cy.get('select').select('option2')
// To select Dynamic dropdown
// 1. select id or class , 2. type method -partial value which we want to search with, 3. use 'each($el,index,$list) method to get the exact search value
cy.get('#autocomplete').type('ind')
// in the website, type ind and rt click on it to get class/div of ui list
cy.get('.ui-menu-item div').each(($el,index,$list) =>
{
 if($el.text()=== 'India')
{ 
cy.wrap($el).click()
}
})
})
})