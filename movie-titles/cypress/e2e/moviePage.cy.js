describe("render movie page correctly", () => {
  it("successfully rendered movie page", () => {
    cy.visit("/movies");
    cy.contains("Popular Movies");
  });

  it("click on each movies", () => {
    // open the wolf creek movie modal
    cy.contains("Under The Gun").click();
    cy.wait(1000);
    cy.get(".modal-dialog").should("be.visible");

    // click close button
    //unable to close the modal
    cy.wait(1000);
    cy.get("#btnCloseModal").click({ force: true });
  });
});
