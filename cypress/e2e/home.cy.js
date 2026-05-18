describe("Home Page", () => {

  it("loads home page", () => {

    cy.visit("http://localhost:5173");

    cy.contains("HOME PAGE").click();

  });

});