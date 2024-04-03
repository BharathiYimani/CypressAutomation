///<reference types='Cypress' />
import HomePage from "../Ex-PageObjectModel/POM-Homepage";
import ProdPage from "../Ex-PageObjectModel/POM-Productpage";
import CheckoutBtn from "../Ex-PageObjectModel/POM-Checkoutpage";
import totalAmount from "../Ex-PageObjectModel/POM-AmountPage";
describe ('Selection of Products', () =>{
    let data; // data is set globally
beforeEach( () => {
cy.fixture('Example-AngularPractice').then((jsonData) => {
data=jsonData
})
})
    it('Select Products', () => {
       const Productpage = new ProdPage() 
       const homePage =new HomePage()
       const CheckButton = new CheckoutBtn()
       const AmountPage = new totalAmount()
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
   
 homePage.getClickonShop().click() 
 data.productName.forEach(function(element)
 {
cy.selectProduct(element)
 })
 Productpage.getCheckoutBtn().click()
 let Sum=0;
 // Add the amounts and comparing with total amount
 AmountPage.getTotalAmount().should('be.visible').each(($el,index,$list) =>{
    const amount=$el.text()
    var res =amount.split(" ")
   res =res[1].trim()
    Sum =Number(res)+Sum
 }).then(function(){
     cy.log(Sum)
 })
//  //Comparing sum of all amounts to total amount
AmountPage.getCompareAmounts().then(function(element) {
 const amount = element.text()
 var res =amount.split(" ")
var Total= res[1].trim()
expect(Number(Total)).to.equal(Sum)

 })
 //click on 'checkout btn
 CheckButton.getCheckoutButton().click()
 CheckButton.getDeliverylocation().type('India')
CheckButton.getSuggestiondropdown().click()
CheckButton.getClickCheckBox().click({force: true},{timeout:8000})
CheckButton.getClickPurchasebtn().click()
CheckButton.getAlertvalidation().then(function(element){
const actualText=element.text()
expect(actualText.includes('Success!')).to.be.true //validating with partial text using assertion
})
// Describe and it closings
})

})