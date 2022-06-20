describe("render movie page correctly", () => {
  it("successfully rendered movie page with all components", () => {
    cy.visit("/movies");
    cy.contains("Popular Movies");
    cy.get("#searchBar").should("be.visible");
  });

  it("click on each movies", () => {
    // open the wolf creek movie modal
    cy.contains("Under The Gun").click();
    cy.wait(1000);
    cy.get(".modal-dialog").should("be.visible");

    cy.wait(1000);
    cy.get("#btnCloseModal").click({ force: true });
  });
});
