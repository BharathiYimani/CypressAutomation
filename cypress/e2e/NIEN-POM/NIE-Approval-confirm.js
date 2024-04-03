class  ConfirmationOverlay {
    handleConfirmationOverlay() {
        // Wait for the overlay to appear
        cy.get('.cdk-overlay-container .cdk-overlay-backdrop',{timeout:40000}).should('be.visible');
        
        // Locate the confirmation overlay
        cy.get('.cdk-overlay-container .cdk-global-overlay-wrapper .cdk-overlay-pane.approvalApproveOverlay').within(() => {
            // Locate the paragraph containing partial text
            cy.get('.delModalContent p').contains('Automat.Co.in-001',{timeout:25000}).should('be.visible');
            
            // Click the continue button
            cy.get('.align-content-center.approvalapproveConfirm .contBtn').click();
        });
    }
}
 export default ConfirmationOverlay;