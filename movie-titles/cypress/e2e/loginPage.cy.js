describe("renders login page", () => {
  it("renders correctly all login components", () => {
    cy.visit("/");
    cy.contains("Log in").click();

    // navigation bar
    cy.contains("DEMO Streaming");
    cy.contains("Watch series");
    cy.contains("Watch movies");
    cy.contains("Log in");
    cy.contains("Start your free trial");

    cy.url().should("include", "/login");
    cy.contains("Start trial today");
    cy.get(".adminForm").should("be.visible");
    cy.contains("Sign up").click();
    cy.contains("Sign in").click();

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
