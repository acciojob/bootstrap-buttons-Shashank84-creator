//your code here
cy.visit(baseUrl + "/main.html");
cy.get("#button-6").should("be.disabled");