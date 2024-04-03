import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../../../Ex-PageObjectModel/POM-Homepage";
import ProdPage from "../../../../Ex-PageObjectModel/POM-Productpage";
import CheckoutBtn from "../../../../Ex-PageObjectModel/POM-Checkoutpage";
import totalAmount from "../../../../Ex-PageObjectModel/POM-AmountPage";

       const Productpage = new ProdPage() 
       const homePage =new HomePage()
       const CheckButton = new CheckoutBtn()
       const AmountPage = new totalAmount()

Given('I open ECommerce Page', () =>
{
cy.visit("https://rahulshettyacademy.com/angularpractice/")
})
// For step2:When I Add Items to the cart
When('I Add Items to the cart', function()
{
    // cy.get('@jsonData').then((data) => {
    //     // Use the data here
    //     // For example: cy.log(data.name)
    //   });
    homePage.getClickonShop().click() 
    data.productName.forEach(function(element)
   {
 cy.selectProduct(element)
   })
   Productpage.getCheckoutBtn().click()
})
//Step3: And  Validate the total price
When('Validate the total price,by comparing amounts', () =>{
    let Sum=0;
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
   
})
// Step-4: Then Select the Country, Submit and verify 
Then('Select the Country, Submit and verify', ()=>{
    CheckButton.getCheckoutButton().click()
    CheckButton.getDeliverylocation().type('India')
   CheckButton.getSuggestiondropdown().click()
   CheckButton.getClickCheckBox().click({force: true},{timeout:8000})
   CheckButton.getClickPurchasebtn().click()
   CheckButton.getAlertvalidation().then(function(element){
   const actualText=element.text()
   expect(actualText.includes('Success!')).to.be.true //validating with partial text using assertion
   })

})
//Scenario-2 step2>as step-1 given url is already there in this step file
 When('Fill the form',function(){
   //cy.get('@jsonData').then((data) => {
      // Use the data here
//         // For example: cy.log(data.name)
//       });
    homePage.getEdiBox().type(data.name)
    homePage.getGender().select(data.gender)
     })
 Then('Validate the form behaviour',function(){
    cy.get('@jsonData').then((data) => {
//         // Use the data here
//         // For example: cy.log(data.name)
    });
     homePage.getTwowayDataBinding().should('have.value',data.name)
     homePage.getEditBox().should('have.attr','minlength','2')
   homePage.getEntrepreneurRadiobtn().should('be.disabled')

Then('select the Shop page',()=>{
   homePage.getClickonShop().click()
  })
})