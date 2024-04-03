///<reference types="cypress" />
describe('Handling Web tables', ()=>{
it('Using Each method', () =>{
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//cy.wait(60000)
cy.get('.table-display tr td:nth-child(2)').each(($e1,index,$list) =>{
const text= $e1.text()
if(text.includes('Python'))
{
cy.get('.table-display tr td:nth-child(2)').eq(index).next().then(function(price)
{
    const priceText=   price.text()
    expect(priceText).to.equal('25')
   })
}
})
})
})