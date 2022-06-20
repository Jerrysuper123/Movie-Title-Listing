import { render, screen } from "@testing-library/react";
import Modal from "../Modal";

const movieDetails = {
  title: "Wolf Creek",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  programType: "series",
  images: {
    "Poster Art": {
      url: "https://streamcoimg-a.akamaihd.net/000/128/61/12861-PosterArt-ec32a81986a45eac7e080112075ab466.jpg",
      width: 1000,
      height: 1500,
    },
  },
  releaseYear: 2016,
};

describe("render modal", () => {
  beforeEach(() => {
    render(<Modal movieDetails={movieDetails} />);
  });

  it("should render the movie title", () => {
    let showCardTitle = screen.getByText("Wolf Creek");
    expect(showCardTitle).toBeInTheDocument();
  });

  it("should render interesting fact about the year", async () => {
    let yearEl = await screen.findByText(/2016 is the year/i);
    expect(yearEl).toBeInTheDocument();
  });
});
