
// testing static routes
it("displays correct heading when navigating to shows route", () => {
  cy.visit("/");
  cy.findByRole("button", {name: /shows/i}).click();
  cy.findByRole('heading', {name: /upcoming shows/i}).should("exist");
})

it("displays correct heading when navigating to bands route", () => {
cy.visit("/");
cy.findByRole("button", {name: /bands/i}).click();
cy.findByRole('heading', {name: /our illustrious performers/i}).should("exist");
})
// dynamic routes
it('display correct ban name for band route that existed at build time', () => {
  cy.task("db:reset").visit("/bands/1");
  cy.findByRole("heading", {name: /Shamrock Pete/i}).should("exist");
});

it("show right message = Could not retrieve band data: Error: band not found", () => {
  cy.task("db:reset").visit("/bands/123545");
  // use find by text to find text
  cy.findByText(/Could not retrieve band data: Error: band not found/i).should("exist");
});