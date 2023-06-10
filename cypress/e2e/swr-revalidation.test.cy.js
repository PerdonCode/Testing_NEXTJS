import {generateNewReservation} from "../../__tests__/__mocks__/fakeData/newReservation";
import { generateRandomId } from "../../lib/features/reservations/utils";


const ONE_SECOND  = 1000;
const THIRTY_SECONDS = 30 * ONE_SECOND;

it("it should refresh the page after 30 seconds", () => {
  cy.clock();
  cy.task("db:reset").visit("/shows");

  //there should be only one sold-out show
  cy.findAllByText( /sold out/i).should("have.length", 1);

  //buy all tickets for first show (id 0, 10 seats left)
  const newReservation = generateNewReservation({
    reservationId: generateRandomId(),
    showId: 0,
    seatCount: 10,
  });
  cy.task("addReservation", newReservation);

  // advance time (less then 30 second revalidate interval) and check again
  cy.tick(ONE_SECOND);
  cy.findAllByText("/sold out/i").should("have.length", 1);

  // advance clock 30 seconds or more; now sold out show should display
  cy.tick(THIRTY_SECONDS);
  cy.findAllByText("/sold out/i").should("have.length", 2);
})