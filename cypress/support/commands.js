import '@testing-library/cypress/add-commands'
// testing static route

Cypress.Commands.add("resetDbAndClearIsrCache",  () => {
  cy.task('db:reset');
  const secret = Cypress.env("REVALIDATION_sECRET");
  cy.request("GET", `/api/revalidate?secret=${secret}`);
});

Cypress.Commands.add("signIn", (email, password) => {
  // note: for manu auth systems, this would POST to an API rather than 
  // go through UI sign in flow
  cy.visit("/auth/signin");

  // fill out the sign in form using arguments
  cy.findByLabelText(/email adress/i).clear().type(email);

  cy.findByLabelText(/password/i).clear().type(password);

  cy.findByRole("main").within(()=>{
    cy.findByRole("button", {name: /sign in/i}).click();
  });
  // check for welcome message
  cy.findByRole("heading", {name: /welcome/i}).should("exist");
})