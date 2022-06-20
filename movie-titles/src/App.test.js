import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App (both nav bar and footer correctly) ", () => {
  render(<App />);
  const brandNameEl = screen.getByText("DEMO Streaming");
  expect(brandNameEl).toBeInTheDocument();

  const pageHeaderEl = screen.getByText("Popular Titles");
  expect(pageHeaderEl).toBeInTheDocument();

  const spinnerEl = screen.getByText("Loading...");
  expect(spinnerEl).toBeInTheDocument();

  const footerHome = screen.getByText("Home");
  expect(footerHome).toBeInTheDocument();
});

test("render series page correctly", () => {
  let component = render(<App />);
  let seriesBtnOnNavBar = component.getByTestId("navToSeriesBtn");
  fireEvent.click(seriesBtnOnNavBar);

  //expect series Wolf Creek to be on screen, when go to series page
  expect(screen.getByAltText("Wolf Creek")).toBeInTheDocument();
});
