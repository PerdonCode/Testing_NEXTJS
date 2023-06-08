import {render, screen} from "@testing-library/react";
// @ zorgt ervoor dat je naar toplevel van file structure gaat
import Home from '@/pages/index'

test('page has correct heading and image', () =>{
  // render home page
  render(<Home />);
  // use findBy when testing an async function 
  const heading = screen.getByRole('heading', {name: "Welcome to Popular Concert Venue",});
  expect(heading).toBeInTheDocument();

  const image = screen.getByRole("img", {name: "Concert goer with hands in the shape of a heart",} );
  expect(image).toBeInTheDocument();
})