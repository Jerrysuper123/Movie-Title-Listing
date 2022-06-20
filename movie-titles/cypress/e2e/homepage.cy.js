describe("renders the home page", () => {
  it("render home page correctly with all components", () => {
    cy.visit("/");

    // home page navigation bar
    cy.contains("DEMO Streaming");
    cy.contains("Watch series");
    cy.contains("Watch movies");
    cy.contains("Log in");
    cy.contains("Start your free trial");

    // home page header text
    cy.contains("Popular Titles");

    // home page carousell
    cy.contains("Start your trial today!");
    cy.contains("Start here");

    // home page body
    cy.contains("Select show by categories");
    cy.contains("SERIES");
    cy.contains("Popular Series");
    cy.contains("MOVIES");
    cy.contains("Popular Movies");

    // footer
    cy.contains("Home");
    cy.contains("Terms and Conditions");
    cy.contains("Privacy Policy");
    cy.contains("Collection Statement");
    cy.contains("Help");
    cy.contains("Manage Account");
    cy.contains("Copyright @2016 DEMO Streaming All Rights Reserved.");
  });

  it("check if Carousell images has been loaded properly", () => {
    cy.get("#load1")
      .should("be.visible")
      .and("have.prop", "naturalWidth")
      .should("be.greaterThan", 0);

    cy.get("#load2")
      .should("be.visible")
      .and("have.prop", "naturalWidth")
      .should("be.greaterThan", 0);

    cy.get("#load3")
      .should("be.visible")
      .and("have.prop", "naturalWidth")
      .should("be.greaterThan", 0);
  });

  // check navigation bar functionality
  it(`click on  "Watch Series" button to go to Series page and then go back to home page`, () => {
    cy.contains("Watch series").click();
    cy.url().should("include", "/series");
    cy.contains("DEMO Streaming").click();
    cy.contains("SERIES");
  });

  it(`click on  "Watch Movies" button to go to Series page and then go back to home page`, () => {
    cy.contains("Watch movies").click();
    cy.url().should("include", "/movies");
    cy.contains("DEMO Streaming").click();
    cy.contains("Movies");
  });

  it(`click on  "Log in" button to go to log in page and then go back to home page`, () => {
    cy.contains("Log in").click();
    cy.url().should("include", "/login");
    cy.contains("Login");
    cy.contains("DEMO Streaming").click();
    cy.contains("Movies");
  });

  it(`click on  "Start your free trial" button to go to sign up page and then go back to home page`, () => {
    cy.contains("Start your free trial").click();
    cy.url().should("include", "/signup");
    cy.contains("Signup");
    cy.contains("DEMO Streaming").click();
    cy.contains("Movies");
  });

  // check call to action funtionality
  it(`click on  "Start here" button to go to sign up page and then go back to home page`, () => {
    cy.contains("Start here").click({ force: true });
    cy.url().should("include", "/signup");
    cy.contains("Signup");
    cy.contains("DEMO Streaming").click();
    cy.contains("Movies");
  });

  // check body "select show by category functionaility"
  it(`click on "SERIES" category to go to Series page and then go back to home page`, () => {
    cy.contains("SERIES").click();
    cy.url().should("include", "/series");
    cy.contains("DEMO Streaming").click();
    cy.contains("SERIES");
  });

  it(`click on "MOVIES" category to got to Movies Page then go back to home page`, () => {
    cy.contains("MOVIES").click();
    cy.url().should("include", "/movie");
    cy.contains("Home").click();
  });

  it(`at home page, click scroll to the top to scroll up to top of the window`, () => {
    cy.get("#scrollUp").click();
    cy.window().its("scrollY").should("equal", 0);
  });

  // check mobile responsiveness
  it(`test mobile responsiveness at iphone 12 size`, () => {
    cy.viewport(390, 844);
    cy.contains("Watch series").should("not.be.visible");
    cy.contains("Watch movies").should("not.be.visible");
    cy.contains("Log in").should("not.be.visible");
    cy.contains("Start your free trial").should("not.be.visible");
    cy.get(".navbar-toggler").click();
    cy.contains("Watch series");
    cy.contains("Watch series").click();
    cy.contains("DEMO Streaming").click();
    cy.get(".navbar-toggler").click();
  });
});
