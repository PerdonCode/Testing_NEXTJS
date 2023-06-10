import '@testing-library/cypress/add-commands'
// testing static route

Cypress.Commands.add("resetDbAndClearIsrCache",  () => {
  cy.task('db:reset');
  const secret = Cypress.env("REVALIDATION_sECRET");
  cy.request("GET", `/api/revalidate?secret=${secret}`);
});