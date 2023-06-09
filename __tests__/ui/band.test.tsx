import {render, screen} from "@testing-library/react";
import BandComponent from "@/pages/bands/[bandId]";
import { readFakeData } from "../__mocks__/fakeData";

// testing SSG props // its async bc its reading files
test("Band component displays correct band information", async () => {
  const {fakeBands} = await readFakeData();
  render(<BandComponent band={fakeBands[0]} error={null} />);

  const heading = screen.getByRole("heading",  {name:"The Wandering Bunnies",});
  expect(heading).toBeInTheDocument();

  // more tests here (img, link, description, author)
});

// test display error
test("band component displys error", () => {
render(<BandComponent band={null} error="EVERYTHING IS FINE"/>);

const error = screen.getByRole("heading", {name: /everything is fine/i});
expect(error).toBeInTheDocument();
});