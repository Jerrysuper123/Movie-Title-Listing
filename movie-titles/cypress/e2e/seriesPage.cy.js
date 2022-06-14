describe("visit series page", () => {
  it("renders correctly", () => {
    cy.visit("/series");
    cy.contains("Popular Series");
  });

  it("click on each series", () => {
    // open the wolf creek movie modal
    cy.contains("Wolf Creek").click();
    cy.get(".modal-dialog").should("be.visible");

    // click close button
    cy.wait(1000);
    cy.get("#btnCloseModal").click({ force: true });
  });
});
