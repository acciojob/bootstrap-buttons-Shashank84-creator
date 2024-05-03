() => { 
  cy.visit(baseUrl + "/main.html"); 
  cy.get("#button-6").should("have.class", "btn btn-info"); 
  cy.get("#button-6").should("be.disabled"); 
  cy.get("#button-5").should("have.class", "btn btn-warning"); 
  cy.get("#button-5").should("have.class", "btn-lg"); 
  cy.get("#button-5").should("have.css", "width", "100%"); 
}
