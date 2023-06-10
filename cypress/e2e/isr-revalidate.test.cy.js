import { response } from "msw";
import { generateNewBand } from "../../__tests__/__mocks__/fakeData/newBand"
import { generateNewShow} from "../../__tests__/__mocks__/fakeData/newShow"
import { generateRandomId } from "../../lib/features/reservations/utils"
import { findByRole } from "@testing-library/react";

it("should load refreshed page from cache after new vand is added", () => {
  // check that new band is not on page
  cy.task("db:reset").visit("/bands");
  cy.findByRole("heading", {
    name: /avalanche of cheese/i
  }).should("not.exist")

  // add new band via post resuest to api
  const bandId = generateRandomId();
  const band = generateNewBand(bandId);
  const secret = Cypress.env("REVALIDATION_SECRET")

  cy.request("POST", `/api/bands?secret=${secret}`, {newBand: band}).then((response) => {
    // revalidate json resp equal to true
    expect(response.body.revalidated).to.equal(true);
  })

  // reload page; new band should appear
  cy.reload();
  cy.findByRole("heading", {
    name: /avalanche of cheese/i
  }).should("exist")

  // reset ISR cache to initial db conditions
  cy.resetDbAndClearIsrCache();

})

it("should load refreshed page from cache after new show is added", () => {
  // check that new show is not on page
  cy.task("db:reset").visit("/shows");
  cy.findByRole("heading", { name: /avalanche of cheese/i}).should("not exist");

  cy.request("POST", `/api/shows?secret=${secret}`, {newShow: show}).then((response) => {
    // revalidate json resp equal to true
    expect(response.body.revalidated).to.equal(true);
  });

  // reload page new shows should exist
  cy.reload();
  cy.findByRole("heading", { name: /avalanche of cheese/i}).should("exist");

  // reset ISR cache to initial db conditions
  cy.resetDbAndClearIsrCache();
})