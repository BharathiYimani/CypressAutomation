describe('NIEN Login Page-URL', () => {
 // Set login url by using beforeEach hook ensures that the user is logged in before each test runs
beforeEach( () => {
   
    cy.visit('http://ec2-52-14-64-70.us-east-2.compute.amazonaws.com/login', {
        failOnStatusCode: false,timeout: 200000}
)
    })
//     // click on Join btn and navigate to Join page to register a company
 it('Click Join Btn', () =>{
    cy.get('button[type="submit"]').contains('Join').click()
    cy.contains('Register').scrollIntoView()
    cy.get('button[type="submit"]').contains('Register').click({ timeout: 20000 })
cy.get('.header').contains('Company')
cy.get('input[placeholder="Enter Company Name"]', { timeout: 18000 }).type('Cy.Company_001')
cy.get('input[placeholder="Enter Federal ID Number"]', {timeout: 18000 }).type('92-8309218') 

// Select industry check boxes
cy.get('.checkboxesDiv').should('be.visible')
cy.get('.checkboxesDiv').within(() => {
    // Iterate over each sub div
    cy.get('.form-group.nien-h-13.d-flex.flex-wrap.align-content-center.margin-bottom-10.mt-0.ng-star-inserted')
    .each(($subDiv) => {
      // Get the industry name from the label within the current sub div
      const industryName = $subDiv.find('.radio.radio-inline.d-flex.flex-wrap.align-content-center.nien-checkbox label').text().trim();
      
      // Check if the industry name includes 'Automobiles'
      if (industryName.includes('Automobiles')) {
        // Find the checkbox input element
        const $checkbox = $subDiv.find('.radio.radio-inline.d-flex.flex-wrap.align-content-center.nien-checkbox input[type="checkbox"]');
        // Ensure the checkbox element exists
      if ($checkbox.length > 0) {
        // Simulate checking the checkbox by invoking a click event
       // $checkbox.click();
      
        // Check the checkbox by setting its 'checked' property to true
        //$checkbox.prop('checked',true).trigger('change')
        cy.wrap($checkbox).check().should('be.checked')
       // cy.wrap($checkbox).should('be.checked')
        
          //cy.get('.header',{timeout:25000 }).should('be.visible').contains('Industry Reference')
       // Wait for the industry reference section to appear
   cy.get('.margin-bottom-5 > :nth-child(1) > .col-form-label').should('be.visible')
   cy.get('.margin-bottom-5 > :nth-child(2) > .col-form-label').contains('Mechanical12').should('be.visible');
    
    // Verify the radio buttons
    cy.get('input[type="radio"][value="yes"]').should('be.visible')
    cy.get('input[type="radio"][value="no"]').should('be.visible')
    // Click on the "Yes" radio button
    cy.get('input[type="radio"][value="yes"]').check().should('be.checked')
    cy.get('#cdk-overlay-1').should('not.exist')
    // Click on the "No" radio button
    cy.get('input[type="radio"][value="no"]').check().should('be.checked')
    cy.get('#cdk-overlay-1').should('be.visible')
        } //else {
          // Log an error if the checkbox element is not found
          //cy.log('Checkbox element not found within the sub div:', $subDiv);
       // }
      }
    })
 })
//

})
})
      
//
//cy.selectIndustry('Power Transmission/Motion Control')
// cy.get('label[triggers="manual"]').each(($el,index,$list) =>{
//      if ($el.text().includes('IND')){
   // Cy.get('#industry').eq(index).check().should('be.checked')
//}
//   })
// cy.get('.checkboxesDiv')
//       .find('input[type="checkbox"]').each(($el,index,$list) => {
//{
   // if ($el.text().includes('IND'))
   // cy.wrap($el).check().should('be.checked')
//}


// Select checkboxes within the div
//       .each(($checkbox) => {            // Iterate over each checkbox
//         cy.wrap($checkbox).check().should('be.checked').and('have.text','Retail Ind')
//            // Check each checkbox
//       })



//})
//cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')

//.check().should('be.checked').and('have.text','Retail Ind')



    // You can perform other interactions as needed

    // Assert something if necessary
    // For example, you can assert that the checkboxes are checked
    


