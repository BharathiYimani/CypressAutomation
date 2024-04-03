class registrationPage{

getClick_Joinbtn(){
    return cy.get('button[type="submit"]')
}

getScroll(){
    return cy.contains('Register')
}

getRegisterbtn_Click(){
    return cy.get('button[type="submit"]')
}
 
getHeader_validation(){
    return cy.get('.header')
}

getCompanyName(){
    return cy.get('input[placeholder="Enter Company Name"]', { timeout: 18000 })
}

getFederalIDNumber(){

    return cy.get('input[placeholder="Enter Federal ID Number"]', { timeout: 18000 })
}
getBusinessType(){
    return cy.get('.ng-dirty.ng-invalid > :nth-child(4) > :nth-child(2) > div.ng-star-inserted > .form-control')
}
getWebsiteAddress(){
    return cy.get('input[placeholder="Enter Website address"]')
}
getLocation_Address1(){
    return cy.get('input[placeholder="Enter Address"]')
}


getLocation_Address2(){
    return cy.get(':nth-child(4) > :nth-child(2) > :nth-child(2) > div.ng-star-inserted > .form-control')
}

getLocation_City(){
    return cy.get('input[placeholder="Enter City"]')
}

getLocation_State(){
    return cy.get('[style="display: grid; grid-template-columns: 251px 80px auto; column-gap: 10px;"] > :nth-child(2) > .form-control')
}
getLocation_Zip(){
    return cy.get('input[placeholder="Enter ZIP"]')
}
getFirstLastName(){
    return cy.get('input[placeholder="Enter First & Last Name"]')
}
getJobDescription(){
    return cy.get('input[placeholder="Enter Title/Job Description"]')

}
getEmailAddress(){
    return cy.get('input[placeholder="Enter Email"]')
}
getConfirmAddress(){
    return cy.get('input[placeholder="Enter Confirm Email"]')
}
getPhoneNumber(){
    return cy.get('input[placeholder="Enter Phone"]')
}
getExtension(){
    return cy.get('input[placeholder="Enter Ext"]')
}
getEnterCell(){
    return cy.get('input[placeholder="Enter Cell"]')
}



}

export default registrationPage;