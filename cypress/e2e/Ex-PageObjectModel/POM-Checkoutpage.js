class CheckoutBtn{
getCheckoutButton() {
    return cy.get(':nth-child(5) > :nth-child(5) > .btn')
}
getDeliverylocation() {
    return cy.get('#country')
}
getSuggestiondropdown() {
    return cy.get('.suggestions > ul > li > a')
}
getClickCheckBox() {
    return cy.get("div input[id='checkbox2']")
}
getClickPurchasebtn() {
    return cy.get('.btn.btn-success.btn-lg')
}
getAlertvalidation(){
    return cy.get('.alert')
}


}

export default CheckoutBtn;