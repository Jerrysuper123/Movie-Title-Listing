describe("render movie page correctly", () => {
  it("render movie page with all components", () => {
    cy.visit("/");
    cy.contains("Watch movies").click();
    cy.url().should("include", "/movies");
    cy.contains("Popular Movies");
    cy.get(".searchInput").should("be.visible");
    cy.get("#webSelectOptions").should("be.visible");
    cy.contains("Load more");
  });

  it("check if show card image has been loaded properly", () => {
    cy.get(".card-img-top")
      .should("be.visible")
      .and("have.prop", "naturalWidth")
      .should("be.greaterThan", 0);
  });

  it("hover over show card to see synopsis of the movie", () => {
    cy.scrollTo(0, 0);
    cy.contains("Under The Gun").trigger("mouseover", { force: true });
    cy.get(".synopsis").should("be.visible");
  });

  it(`click on "Under The Gun" movies to see the pop up, and then close it`, () => {
    // open the wolf creek movie modal
    cy.contains("Under The Gun").click({ force: true });
    cy.wait(1000);
    cy.get(".modal-dialog").should("be.visible");
    cy.contains("2016 is the year").should("be.visible");
    cy.wait(1000);
    cy.get("#btnCloseModal").click({ force: true });
  });

  it(`click on "Load more" to load more shows`, () => {
    cy.get("#moviesLoadMoreBtn").click();
    cy.contains("Prisoners");
    // after load more once, the button should be gone
    cy.get("#moviesLoadMoreBtn").should("not.exist");
  });

  it(`click "scroll to the top" to scroll up to top of the window`, () => {
    cy.get("#scrollUp").click();
    cy.window().its("scrollY").should("equal", 0);
  });

  it(`key "Under the Gun" in search bar, we should not to see only 1 movie being loaded`, () => {
    cy.get(".searchInput").type("Under the Gun{enter}", { force: true });
    cy.get(".movieCardsLoaded").find("div").should("have.length", 1);
    cy.get(".searchInput").clear();
  });

  it(`Filter year "2015" , we should not to see only 12 movie being loaded`, () => {
    cy.get("#webSelectOptions").select("2015", { force: true });
    cy.get(".movieCardsLoaded").find("div").should("have.length", 12);
    cy.get("#webSelectOptions").select("all time", { force: true });
  });

  // check mobile responsiveness
  it(`test mobile responsiveness at iphone 12 size`, () => {
    cy.viewport(390, 844);
    cy.contains("Watch series").should("not.be.visible");
    cy.contains("Watch movies").should("not.be.visible");
    cy.contains("Log in").should("not.be.visible");
    cy.contains("Start your free trial").should("not.be.visible");
    cy.scrollTo("top");
    cy.get(".dropdownBtn").click({ force: true });
    // select 2015 should have 12 movies
    cy.get("#mobileSelectOptions").select("2015", { force: true });
    cy.get(".movieCardsLoaded").find("div").should("have.length", 12);
    cy.get("#mobileSelectOptions").select("all time", { force: true });
    cy.scrollTo("bottom");
    //test scroll up btn
    cy.get("#scrollUp").click();
    cy.window().its("scrollY").should("equal", 0);
  });
});
