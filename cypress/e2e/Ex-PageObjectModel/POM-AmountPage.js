class totalAmount{

getTotalAmount(){
    return  cy.get('tr td:nth-child(4) strong')
}
getCompareAmounts(){
    return cy.get('h3 strong')
}
}

export default totalAmount;