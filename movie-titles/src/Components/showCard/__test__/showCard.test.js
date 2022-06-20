import { render, screen, fireEvent } from "@testing-library/react";

import ShowCard from "../showCard";
const sampleData = {
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

describe(`render a movie with title "Wolf Creek"`, () => {
  beforeEach(() => {
    render(
      <ShowCard
        imgUrl={sampleData.images["Poster Art"].url}
        title={sampleData.title}
        description={sampleData.description}
      />
    );
  });

  it(`card title to be "Wolf Creek`, () => {
    let showCardTitle = screen.getByText("Wolf Creek");
    expect(showCardTitle).toBeInTheDocument();
  });

  it(`hidden synopsis should not appear on the card`, () => {
    let hiddenEl = screen.getByTestId("hiddenSynopsis");
    expect(hiddenEl).not.toBeVisible();
  });

  it(`when hover on the card, hidden synopsis should appear on the card`, () => {
    // img alt text is the movie or series title
    let showCardTitle = screen.getByText("Wolf Creek");
    fireEvent.mouseEnter(showCardTitle);
    let hiddenEl = screen.getByTestId("hiddenSynopsis");
    expect(hiddenEl).toBeVisible();
  });
});
