it("displays bands when skipping client-side javascript, confirming initial ISR", () => {
  cy.request("/bands")
  .its("body")
  .then((html) =>{
    // removes all javascript so that it doesn't override the static generation
    const staticHtml = html.replace(/<script.*?>.*?<\/script>/gm, '');
    cy.state("document").write(staticHtml);
  });

  // find expected bands
  cy.findByRole("heading", {name: /the wandering bunnies/i}).should("exist");
  cy.findByRole("heading", {name: /shamrock pete/i}).should("exist");
  cy.findByRole("heading", {name: /the joyous nun riot/i}).should("exist");

})