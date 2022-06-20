describe("renders signup page", () => {
  it("renders correctly all login components", () => {
    cy.visit("/");
    cy.contains("Start your free trial").click();

    // navigation bar
    cy.contains("DEMO Streaming");
    cy.contains("Watch series");
    cy.contains("Watch movies");
    cy.contains("Log in");
    cy.contains("Start your free trial");

    cy.url().should("include", "/signup");
    cy.contains("Sign up today!");
    cy.get(".adminForm").should("be.visible");
    // cy.get("#webSelectOptions").should("be.visible");
    // cy.contains("Load more");
    cy.contains("Sign in").click();
    cy.contains("Sign up").click();

    // footer
    cy.contains("Home");
    cy.contains("Terms and Conditions");
    cy.contains("Privacy Policy");
    cy.contains("Collection Statement");
    cy.contains("Help");
    cy.contains("Manage Account");
    cy.contains("Copyright @2016 DEMO Streaming All Rights Reserved.");
  });
});
