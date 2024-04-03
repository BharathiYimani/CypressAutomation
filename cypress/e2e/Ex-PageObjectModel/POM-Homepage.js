class HomePage {

    // add locator for editbox input-name input
    getEdiBox() {
        return  cy.get('input[name="name"]:nth-child(2)')
    }
//locator for gender
getGender(){

    return cy.get('select')
}
//locator for Two-way Data Binding example: 
getTwowayDataBinding(){
return cy.get(':nth-child(4) > .ng-untouched')
}
//validation for name input field for min-length
getEditBox(){
    return cy.get('input[name="name"]:nth-child(2)')
}
// Validation for 'Entrepreneur' radiobtn
getEntrepreneurRadiobtn(){

    return cy.get('#inlineRadio3')
}
 // to clcik on shop btn
 getClickonShop(){
    return cy.get(':nth-child(2) > .nav-link')
 }
 
}

export default HomePage;