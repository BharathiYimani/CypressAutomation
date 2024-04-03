class Form_SelectIndustries {

getcheckboxDiv_validation(){
    return cy.get('.checkboxesDiv',{timeout:20000})
}
getParentDiv_checkbox(){
    return cy.get('.checkboxesDiv')
}

getSubdiv(){
    return cy.get('.form-group.nien-h-13.d-flex.flex-wrap.align-content-center.margin-bottom-10.mt-0.ng-star-inserted')
}
// Industry References
getAssociate_IndustryValidation() {
    return  cy.get('.margin-bottom-5 > :nth-child(2) > .col-form-label')
}
getIndustryReferenceOverlay(){
    return cy.get('#cdk-overlay-1') //industry reference overlay
}
RefIndustry_1Companyname(){
    return cy.get(':nth-child(1) > nien-overlay-form-content > form.ng-pristine > div.ng-pristine > :nth-child(1) > :nth-child(2) > div.ng-star-inserted > .form-control')
}
RefIndustry_1Address1(){
    return cy.get('[formarrayname="references"] > :nth-child(1) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(2) > :nth-child(2) > div.ng-star-inserted > .form-control')
}
RefIndustry_1Address2(){
    return cy.get('[formarrayname="references"] > :nth-child(1) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(3) > :nth-child(2) > div.ng-star-inserted > .form-control')
}
RefIndustry_1City(){
    return cy.get('.ng-invalid.ng-dirty > :nth-child(4) > [style="display: grid; grid-template-columns: 140px 78px auto; column-gap: 10px;"] > :nth-child(1) > .form-control')
}
RefIndustry_1State(){
    return cy.get('.ng-invalid.ng-dirty > :nth-child(4) > [style="display: grid; grid-template-columns: 140px 78px auto; column-gap: 10px;"] > :nth-child(2) > .form-control')
}
RefIndustry_1Zip(){
    return cy.get('.ng-invalid.ng-dirty > :nth-child(4) > [style="display: grid; grid-template-columns: 140px 78px auto; column-gap: 10px;"] > :nth-child(3) > .form-control')
}
RefIndustry_1contact(){
    return cy.get('[formarrayname="references"] > :nth-child(1) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(5) > :nth-child(2) > div.ng-star-inserted > .form-control')
}
RefIndustry_1email(){
    return cy.get('.ng-invalid.ng-dirty > :nth-child(6) > :nth-child(2) > div.ng-star-inserted > .form-control')
}

RefIndustry_1Phoneno(){
    return cy.get('.ng-invalid.ng-dirty > :nth-child(7) > [style="display: grid; grid-template-columns: 198px 20px auto; column-gap: 10px;"] > :nth-child(1) > .form-control')
}
RefIndustry_1EXT(){
    return cy.get('div.ng-dirty > :nth-child(7) > [style="display: grid; grid-template-columns: 198px 20px auto; column-gap: 10px;"] > :nth-child(3) > .form-control')
}
//Reference2 details
RefIndustry_2Companyname(){
    return cy.get('div.ng-untouched > :nth-child(1) > :nth-child(2) > div.ng-star-inserted > .form-control')
}
RefIndustry_2Address1(){
    return cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(2) > :nth-child(2) > div.ng-star-inserted > .form-control')
}
RefIndustry_2Address2(){
    return cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(3) > :nth-child(2) > div.ng-star-inserted > .form-control')
}
RefIndustry_2City(){
    return cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(4) > [style="display: grid; grid-template-columns: 140px 78px auto; column-gap: 10px;"] > :nth-child(1) > .form-control')
}
RefIndustry_2State(){
    return cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(4) > [style="display: grid; grid-template-columns: 140px 78px auto; column-gap: 10px;"] > :nth-child(2) > .form-control')
}
RefIndustry_2Zip(){
    return cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(4) > [style="display: grid; grid-template-columns: 140px 78px auto; column-gap: 10px;"] > :nth-child(3) > .form-control')
}
RefIndustry_2contact(){
    return cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(5) > :nth-child(2) > div.ng-star-inserted > .form-control')
}
RefIndustry_2email(){
    return cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(6) > :nth-child(2) > div.ng-star-inserted > .form-control')
}

RefIndustry_2Phoneno(){
    return cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-invalid > .ng-invalid.ng-dirty > :nth-child(7) > [style="display: grid; grid-template-columns: 198px 20px auto; column-gap: 10px;"] > :nth-child(1) > .form-control')
}
RefIndustry_2EXT(){
    return cy.get(':nth-child(2) > nien-overlay-form-content > form.ng-dirty > div.ng-dirty > :nth-child(7) > [style="display: grid; grid-template-columns: 198px 20px auto; column-gap: 10px;"] > :nth-child(3) > .form-control')
}
getSavebtn(){
    return cy.get('.margin-top-15 > .margin-left-10')
}
getreference_Validationtxt(){
    cy.get('.referenceCompleteText')
}
getgreentick(){
    return cy.get('.green-tick-mark')
}
getEditBtn(){
    return cy.get(':nth-child(5) > :nth-child(2) > .btn')
}
getRegisteration_Submitbtn(){
    return cy.get('div.d-flex.flex-wrap.align-content-center.justify-content-end')
}
}

export default Form_SelectIndustries;