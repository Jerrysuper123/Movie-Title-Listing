import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

const movieDetails = { releaseYear: 2015 };
// test suite - group
describe("<try/> component", () => {
  test("is the post fetch correctly", async () => {
    render(<Modal movieDetails={movieDetails} />);

    //asyc action takes time
    //get all by role immediately get all itesm on screen, we do not want
    //findAllByRole will wait before assert
    // const el = await screen.findAllByRole("listitem");
    // expect(el).not.toHaveLength(0);

    const pElement = await screen.queryByText(`${movieDetails.releaseYear}`);
    expect(pElement).toBeNull();
  });
});
