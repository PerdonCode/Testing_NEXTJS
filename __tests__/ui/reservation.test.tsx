import {render, screen} from "@testing-library/react";
import { Reservation } from "@/components/reservations/Reservation";

test("reservation page shows correct number of available seats", async () => {
  render(<Reservation showId={0} submitPurchase={jest.fn()} />);

  const seatCountText = await screen.findByText(/10 seats left/i)
  expect(seatCountText).toBeInTheDocument();
})

test("reservation page shows 'sold out' message and NO purchase buttin if there are no seats available", async () => {
  render(<Reservation showId={1} submitPurchase={jest.fn()} />);
  // everything that comes back from MSW is ASYNC
  const soldOutMessage = await screen.findByRole("heading", {name: /sold out/i});
  expect(soldOutMessage).toBeInTheDocument();
  
  // we expact it to be not in the documents 
  const purchaseButton = screen.queryByRole("button", {name: /purchase/i});
  expect(purchaseButton).toBeInTheDocument();

})