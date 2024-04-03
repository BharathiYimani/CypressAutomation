///<reference types="cypress" />

describe('Evolve Login', () =>{
    beforeEach(() =>{
        // Set cookies or perform other setup actions here
        cy.setCookie('ADSK_GDPR_OPT_LENGTH', 'Tue%2C%2001%20Apr%202025%2011%3A08%3A10%20GMT');
        
         })

 it('Login',()=>{
        cy.visit('https://foresite-testing.evolvemep.com/', {timeout: 40000})
        cy.get('#mui-1').type('arpitha.nanjundappa@techgrit.com')
        //Password
        cy.get('#mui-2').type('Techgrit@123')
        //Login btn
        cy.get('button[type="submit"]').contains('Login').click({force:true})
        // Accept cookies
        cy.get('#hs-eu-cookie-confirmation-inner').find('#hs-eu-confirmation-button').click()
cy.get('loading.spinner').should('not.exist')
cy.get('[data-cy="select-module-button"]',{timeout:15000}).click()
//Click on 360sync btn
cy.get('[data-cy="module-360sync"] > img').click()
 // Select vertical div to click 360syn
cy.get('[data-testid="nav-menu-360-sync"]').click();
// To avoid loading
cy.get('loading.spinner').should('not.exist',{timeout:20000}) 
// Click on Connectors 
cy.get('.MuiDrawer-root > .MuiPaper-root')

cy.get('div[class="MuiBox-root.css-19idom"] .MuiGrid-root MuiGrid-container MuiGrid-wrap-xs-nowrap css-1h2c46l').should('contain.text','New connector')
//cy.get('.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.css-1l8j5k8 ul li:last-child').click()
        // After logging in at top right most corner click and select 360sync
      //   cy.get('button[data-cy="select-module-button"]',{timeout:15000}).click()
      //   cy.get('#demoPopper').find('div[data-cy="module-360sync"]',{timeout:15000}).click()
      //   // To avoid loading
      //   cy.get('loading.spinner').should('not.exist',{timeout:20000}) 
      //   // Select vertical div to click 360syn
      //   cy.contains('.NavList-nestedListItem', '360 Sync').click();
        
      //   //cy.get('.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation0.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.css-1l8j5k8 ul li:last-child').click()
      // //Click on Connectors
      // cy.get('li[data-testid="nav-item-connectors"]').click()
      //
    })
})
  



// ///<reference types="cypress" />
// describe('Evolve Login', () =>{
// // beforeEach(() =>{
// //     cy.visit('https://foresite-testing.evolvemep.com/', {timeout: 200000})
// // })

// it('Login',()=>{
//     cy.visit('https://foresite-testing.evolvemep.com/',{timeout:20000})
//     cy.get('#mui-1').type('arpitha.nanjundappa@techgrit.com')
//     //Password
//     cy.get('#mui-2').type('Techgrit@123')
//     //Login btn
//     cy.get('button[type="submit"]').contains('Login').click({force:true})
//     // Accept cookies
//     cy.get('#hs-eu-cookie-confirmation-inner').find('#hs-eu-confirmation-button').click()
// })

// })