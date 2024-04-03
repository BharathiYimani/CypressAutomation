///<reference types="cypress" />
import BO_Approval from "../NIEN-POM/BO-Registration-Approval";
describe('Company Approval', ()=>{
  let data;
beforeEach(()=>{
cy.visit('http://ec2-52-14-64-70.us-east-2.compute.amazonaws.com/login',{
    failOnStatusCode: false,timeout: 200000})
cy.fixture('NIENAdminApproval').then((jsonData)=>{
data=jsonData;
})
})
it("Admin Login to approve company",()=>{
// Login with Admin credential
const BOApproval=new BO_Approval()
BOApproval.getUsername().scrollIntoView().type(data.AdminCred,{force:true})
BOApproval.getPassword().type(data.AdminPassword,{force:true})
// Submit login form
BOApproval.getLoginBtn().click({timeout:2000})
//Click on Menu- Company
cy.get('.loading-spinner').should('not.exist',{timeout:3000})
cy.get('ul.navbar-nav')  // Select the navbar navigation list
.contains('Company')   // Look for the link containing text 'Company'
.parent()              // Go to the parent of the link, which should be the <li> element
.next()                // Select the next sibling, assuming the "Dashboard" link is the next sibling
.find('a')             // Find the <a> element within the next sibling
.click({force:true})   // Click on the link
// Company Dashboard
// in the table partial search company name
cy.get('.table tr td:nth-child(3) input[placeholder="search"]').type('Automat');
// Wait for the search results to load and check
cy.get('.text-highlight').should('be.visible')
.then(($elements) => {
// Get the text of each matching element
$elements.each((index, element) => {
const text = Cypress.$(element).text();
cy.log(`Partial text match found: ${text}`);
 });
    });
cy.get('.table tr td:nth-child(3) input[placeholder="search"]').clear().type('Automat.Co.in-001');
cy.get('.scrollable-content', { timeout: 20000 }).contains('Automat.Co.in-001');
cy.get('tr[id="751e1381-1a2b-4266-900f-f18f6ac2b980"]').within(() => {
cy.get('.mat-menu-trigger > .nien-pl-5', { timeout: 10000 }).click().then(() => {
// Intercepting click events targeting elements outside the parent container
cy.document().then((doc) => {
doc.addEventListener('click', (e) => {
const target = e.target;
// Check if the clicked element is outside the parent container
if (!target.closest('tr[id="751e1381-1a2b-4266-900f-f18f6ac2b980"]')) {
e.stopPropagation(); // Prevent the default action of the click event
e.preventDefault();
        }
      }, true);
    });
  });
});
// Approve/decline/pending overlay


cy.get('div[class="cdk-overlay-connected-position-bounding-box"] .cdk-overlay-pane', { timeout: 40000 }).should('exist').should('be.visible');
// Define the maximum number of retries
// Define the waitUntilVisible function
// Define the waitUntilVisible function
const waitUntilVisible = (selector, timeout, retries) => {
  return cy.get(selector, { timeout: timeout }).should('be.visible')
    .then(($el) => {
      // If element is visible, return it
      return $el;
    })
    .then(null, () => {
      // If retries left, retry
      if (retries > 0) {
        retries--;
        // Retry after a short delay
        return cy.wait(1000).then(() => waitUntilVisible(selector, timeout, retries));
      }
      // Otherwise, throw an error
      throw new Error(`Element ${selector} did not become visible within the specified timeout.`);
    });
};

// Define the maximum number of retries
const maxRetries = 10; // Increase or decrease as needed

// Click the "Approved" button with retries
cy.get('.mat-menu-content > button:nth-child(2)').contains('Approved').click({ timeout: 15000 }).then(() => {
  // Wait for the confirmation overlay to appear
  waitUntilVisible('.cdk-overlay-pane.approvalApproveOverlay', 15000, maxRetries)
    .then(() => {
      // Check if the confirmation message contains the expected text
      cy.get('.delModalContent').contains('Automat.Co.in-001').then(() => {
        // Click the "Continue" button
        cy.get('.approvalapproveConfirm .contBtn').click();
      });
    });
});

// //test trial
// cy.get('.mat-menu-content >button:nth-child(2)').contains('Approved').click({ timeout: 15000, retries: maxRetries }).then(() => {
//   // Wait for the confirmation overlay to appear
//   cy.waitUntil(() => {
//     return cy.get(() => document.querySelector("#cdk-overlay-2")).should('exist').should('be.visible').then(() => true);
//   }, { timeout: 15000 });

// // Check if the confirmation message contains the expected text
// cy.get('.delModalContent').contains('Automat.Co.in-001').then(() => {
//   // Click the "Continue" button
//   cy.get('.approvalapproveConfirm .contBtn').click();
// });
// //test trial end
//closings
});


})
//cy.get('.loading-spinner').should('not.exist',{timeout:3000})
// Confirmation pop
//cy.get('div[class="cdk-global-overlay-wrapper"] .cdk-overlay-pane.approvalApproveOverlay')
//.then(() => {
// Wait for the overlay to be displayed
//cy.get('.loader').should('not.exist')
//cy.get('.approvalApproveOverlay',{timeout:20000}).should('exist').should('be.visible');
// Use cy.document() to access the document object and add an event listener
//cy.document().then((doc) => {
//doc.addEventListener('customConfirmationEvent', () => {
// Perform actions when the custom event is triggered, such as clicking the "Continue" button
//cy.get('.approvalapproveConfirm .contBtn').click();
    //});
  
  //})
  // Trigger the custom event (this could be simulated by your application)
  //cy.document().trigger('customConfirmationEvent');
//});
  // Confirm that the overlay is displayed
 // cy.get('.approvalApproveOverlay',{timeout:40000}).should('exist').should('be.visible');

  // Click the "Continue" button
  //cy.get('.approvalapproveConfirm .contBtn').click();


    //working partially disabled for other trial purpose
// cy.get('.table tr td:nth-child(3) input[placeholder="search"]').clear().type('Automat.Co.in-001') // Clear the search and type the exact company name
// cy.get('.scrollable-content',{ timeout: 20000 }).contains('Automat.Co.in-001') // Wait for the table to update with the exact match
// cy.get('tr#751e1381-1a2b-4266-900f-f18f6ac2b980').within(() => { // each row has unique id value
// // Perform actions within the selected <tr> element
// // Assuming you're writing a Cypress test
// //trial for avoiding another click
// cy.get('.mat-menu-trigger > .nien-pl-5',{timeout:10000}).click().then(() => {
//   // Intercepting click events
//   cy.intercept('click').as('clickInterceptor');
//   cy.wait('@clickInterceptor', { timeout: 40000 }).then(() => {
//       // After intercepting, perform your assertions and actions
//       cy.get('div[class="cdk-overlay-connected-position-bounding-box"] .cdk-overlay-pane',{timeout:40000}).should('exist').should('be.visible');
//       cy.get('.mat-menu-content > :nth-child(2)').contains('Approved').click();
//   });
// });

// cy.get('.mat-menu-trigger > .nien-pl-5',{timeout:10000}).click()
// //cy.get('.nien-pl-5').click({force:true})// This assumes that clicking on the image performs the desired action
// //cy.scrollIntoView()
// })
// cy.wait(50000)
// cy.get('div[class="cdk-overlay-connected-position-bounding-box"] .cdk-overlay-pane',{timeout:40000}).should('exist').should('be.visible')
// cy.get('.mat-menu-content > :nth-child(2)').contains('Approved').click()
// //cy.get('div[tabindex="-1"] div.mat-menu-content:nth-child(1)').contains('Approved').click({Forece:true})
// cy.log("Approve is displayed")

//Closings



// Trial4

// Click on the three dots to reveal the menu
// cy.get('.mat-menu-trigger > .nien-pl-5', { timeout: 20000 })
//   .click({ force: true }) // Use {force:true} if element is not clickable
//   .then(() => {
//     // Add debug statement
//     cy.log('Clicked on the menu trigger');
//   });
// cy.get('.mat-menu-trigger > .nien-pl-5',{timeout:10000})
// .click().click()
// .get('.mat-menu-content').should('exist')
// .should('be.visible').get('.mat-menu-content > :nth-child(2)').click({force:true})


// Wait for the menu content to be visible
// cy.get('div[class="cdk-overlay-pane"] .mat-menu-content', { timeout: 20000 })
//   .should('be.visible')
//   .then(() => {
//     // Once the menu content is visible, find and click the button within it
//     cy.get('div[class="cdk-overlay-pane"] .mat-menu-content button:nth-child(2)', { timeout: 5000 }) // Reduce timeout as it should be visible now
//       .should('be.visible')
//       .click();
//   });

//
// cy.get('.mat-menu-trigger > .nien-pl-5',{timeout:20000}).click({force:true}).then(() => {
//   // Add debug statement
//   cy.log('Clicked on the menu trigger');
// }) // Retry the click action up to 3 times if it fails

// cy.get('div[class="cdk-overlay-pane"] .mat-menu-content button:nth-child(2)', { timeout: 20000 }).should('be.visible').click();//clcik on 3 vertical dots
// //cy.get('div[class="cdk-overlay-pane"] .mat-menu-content button:nth-child(2)',{timeout:20000}).should('be.visible').click()



  
  
//should('exist').should('be.visible'); // Ensure the panel exists
//cy.get('div[class="cdk-overlay-pane"] .mat-menu-content button:nth-child(2)').; // Ensure the panel is visible

// Wait for the panel to stabilize before proceeding
//cy.wait(1000); // Adjust the wait duration as needed

// Now, perform actions within the panel
//cy.get('div[class="cdk-overlay-pane"] .mat-menu-content button:nth-child(2)').within(() => {
    // Verify the button which contains 'Approved' and click
   // cy.contains('Approved').should('be.visible').click();


//cy.get('#mat-menu-panel-12').should('be.visible')// panel with 'pending' ,'Declined' ,'Approved' 
//verify the button which contains 'Approved' and click
//cy.get('.mat-focus-indicator').should('be.visible').contains(' Approved ').click()
    

  
  //parent('tr').within(() => {
    //cy.get('.nien-pl-5').click(); // Click on the three dots image
 




//cy.get('.ng-tns-c364-13').click()


//closings


    
// cy.get('.table tr').each(($row) => {
//   // Get the text of the column in the current row
//   cy.wrap($row).find('td:nth-child(3)').invoke('text').then((text) => {
//     // Check if the column text matches 'Automat.Co.in-001'
//     if (text.trim() === 'Automat.Co.in-001') {
//       // Click on the desired element in the current row
//       cy.wrap($row).find('.mat-menu-trigger > .nien-pl-5').click();
//     }

  
//cy.get(':nth-child(1) > .tableColumn > .onlyobjectpadding > .text-nowrap > :nth-child(1) > .d-flex',{timeout:8000}).contains('pending')
//cy.get('.text-nowrap > :nth-child(1) > .d-flex > div',{timeout:6000}).click({multiple:true})
// //Trial-7
// // in the table search company name
// cy.get('.table tr td:nth-child(3) input[placeholder="search"]').type('Automat');

// // Wait for the search results to load
// cy.wait(3000); // Adjust the wait time as needed

// // Check if the text 'Automat.Co.in-001' exists in the search results
// cy.get('.text-highlight').then(($elements) => {
//   // Get the length of the search results
//   const length = $elements.length;

//   // Check if the length is greater than 0
//   if (length > 0) {
//     // Iterate over each element and check if it contains the desired text
//     $elements.each((index, element) => {
//       const text = Cypress.$(element).text();
//       if (text === 'Automat.Co.in-001') {
//         // Clear the search input and type the full text
//         cy.get('.table tr td:nth-child(3) input[placeholder="search"]').clear().type('Automat.Co.in-001');
//       }
//     });
//   } else {
//     // Handle the case where the desired text is not found
//     // Log an error or perform necessary actions
//     cy.log('Error: Desired text not found');
//   }
// });

// // Wait for the search results to update
// cy.wait(2000); // Adjust the wait time as needed

//Trial-6
// in the table search company name
// cy.get('.table tr td:nth-child(3) input[placeholder="search"]').type('Automat');

// // Wait for the search results to load
// cy.wait(3000); // Adjust the wait time as needed

// // Check if the text 'Automat.Co.in-001' exists in the search results
// cy.get('.text-highlight')
//   .contains('Automat.Co.in-001')
//   .then(($element) => {
//     // If the text is found, clear the search input and type the full text
//     if ($element.length > 0) {
//       cy.get('.table tr td:nth-child(3) input[placeholder="search"]').clear().type('Automat.Co.in-001');
//     } else {
//       // Handle the case where the desired text is not found
//       // Log an error or perform necessary actions
//       cy.log('Error: Desired text not found');
//     }
//   });

// // Wait for the search results to update
// cy.wait(2000); // Adjust the wait time as needed

//Trial-5
// cy.get('.table tr td:nth-child(3) input[placeholder="search"]').type('Automat')
// // Wait for the search results to load
// cy.wait(4000); // Adjust the wait time as needed
// // Get all matching elements
// cy.get('.text-highlight').then($elements => {
//     // Get the length of the search results
//     const length = $elements.length;
// // Check if the length is greater than 0
//     if (length > 0) {
//         // Iterate over each element and check if it contains the desired text
//         $elements.each((index, element) => {
//             const text = Cypress.$(element).text();
//             if (text === 'Automat.Co.in-001') {
//                 // Click on the element if it matches the desired text
//                 cy.wrap(element).click({ force: true });
//                 return false; // Stop further iterations
//             }
//         });
//     } else {
//         // Log a message if no results found
//         cy.log('No matching items found.');
//     }
// });







// // Wait for the search results to load
// cy.wait(2000); // Adjust the wait time as needed

// // Select the row containing the desired text 'Automat.Co.in-001'
// cy.get('.scrollable-content').contains('.text-highlight', 'Automat.Co.in-001').click({ force: true });

// cy.get('.table tr td:nth-child(3) input[placeholder="search"]').type('Automat')
// cy.wait(2000)
// cy.get('.text-highlight',{timeout:5000}).should('contain','Automat.Co.in-001')
// cy.get('.table tr td:nth-child(3) input[placeholder="search"]').type('Automat.Co.in-001')


// Wait for the search results to load
// cy.wait(2000) // Adjust the wait time as needed

// // Validate if the desired text is present in the search results
// cy.get('.text-highlight', { timeout: 5000 }).should(($result) => {
//   // Extract text content from all matching elements
//   const texts = $result.map((index, element) => Cypress.$(element).text()).get();
//   // Check if the desired text is present in any of the extracted texts
//   expect(texts).to.include('Automat.Co.in-001');
// });

//  cy.get('.table tr td:nth-child(3) input[placeholder="search"]').type('Automat')
// cy.wait(3000)
//  cy.get('.text-highlight').should('contain','Automat.Co.in-001')
//  .then(($result) => {
//    // If the desired text is not found, log an error
//    if ($result.length === 0) {
//      cy.log('Error: The expected text "Automat.Co.in-001" was not found in search results.');
//    }
//  });

//   // }
  //cy.get('#bca840d0-5195-4b6a-b069-af57179ecfcd > :nth-child(1)').contains('Pending')
  //cy.get('#bca840d0-5195-4b6a-b069-af57179ecfcd > :nth-child(1) > .tableColumn > .onlyobjectpadding > .text-nowrap > :nth-child(1) > .d-flex > div').click()
  //cy.get()
//})
//cy.get('.d-flex.align-items-center.justify-content-between.ng-star-inserted.showApprovalMenuOverlay').contains(' Pending ')
//cy.get('mat-menu-trigger.nien-pl-5.cursor-pointer').click()
//cy.get('#bca840d0-5195-4b6a-b069-af57179ecfcd > :nth-child(1)').contains('Pending').find('#bca840d0-5195-4b6a-b069-af57179ecfcd > :nth-child(1) > .tableColumn > .onlyobjectpadding > .text-nowrap > :nth-child(1) > .d-flex > div').click()











