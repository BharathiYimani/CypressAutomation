class BO_Approval {
getUsername(){
    return cy.get('input[placeholder="Enter Email Address"]')
}
getPassword(){
    return cy.get(".padding-top-5 > .col-sm-8 > .form-control")
}
getLoginBtn(){
    return cy.get('.col-sm-12 > .btn').contains('Login')
}



}

export default BO_Approval;