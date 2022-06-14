describe("renders the home page", () => {
  it("render correctly", () => {
    cy.visit("http://localhost:3000");
    cy.contains("SERIES");
    cy.contains("MOVIES");
  });

  it("click on series button", () => {
    cy.contains("SERIES").click();
    cy.url().should("include", "/series");
    cy.contains("DEMO Streaming").click();
    cy.contains("SERIES");
  });

  it("click on movie button", () => {
    cy.contains("MOVIES").click();
    cy.url().should("include", "/movie");
    cy.visit("http://localhost:3000");
  });
});
