describe("renders the home page", () => {
  it("render correctly", () => {
    cy.visit("/");
    cy.contains("SERIES");
    cy.contains("MOVIES");
  });

  it("click on series button and then go back to home page", () => {
    cy.contains("SERIES").click();
    cy.url().should("include", "/series");
    cy.contains("DEMO Streaming").click();
    cy.contains("SERIES");
  });

  it("click on movie button then go back to home page", () => {
    cy.contains("MOVIES").click();
    cy.url().should("include", "/movie");
    cy.visit("/");
  });
});
