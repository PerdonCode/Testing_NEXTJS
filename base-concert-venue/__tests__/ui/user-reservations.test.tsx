import {render, screen} from "@testing-library/react";
import { UserReservations } from "@/components/user/UserReservations";

test("displays reservations and 'purchase more' button when reservations exist", async () => {
  render(<UserReservations userId={0} />);
// getBy* is for elements that are expected to be on the page at the time of the query. await findBy* is for elements that are expected to show up asynchronously 
  const purchaseButton = await screen.findByRole("button", {name: /purchase more tickets/i});
  expect(purchaseButton).toBeInTheDocument();
})

test("Displays no reservation and 'purchase' button when no reservations exist", async () => {
  render(<UserReservations userId={0} />);
  const purchaseButton = await screen.findByRole("button", {name: /purchase tickets/i});
  expect(purchaseButton).toBeInTheDocument();

  const ticketsHeading = screen.queryByRole("heading", {
    name: /your tickets/i,
  });
  expect(ticketsHeading).not.toBeInTheDocument();
})

// different tests could be
// users with no shows reserved
// show with no tickets available
// show with tickets available
// show with tickets available but user has already reserved them
// show with tickets available but user has already reserved them and they are past the reservation time 

// option 1 differen handlers for different tests
// option 2 make use of the Id in the url parak
  // samen handler returns different result based on ID

