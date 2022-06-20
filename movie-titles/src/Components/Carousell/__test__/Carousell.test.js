import { render, screen, fireEvent } from "@testing-library/react";
import Carousell from "../Carousell";
import { sampleTestData } from "../../../Util";

beforeEach(() => {
  render(<Carousell movies={sampleTestData} />);
});

test("test carousell if first img has been loaded properly", () => {
  // img alt text is the movie or series title
  const img = screen.getByAltText("Wolf Creek");
  fireEvent.load(img);
});

test("test carousell if second img has been loaded properly", () => {
  const img = screen.getByAltText("No Activity");
  fireEvent.load(img);
});

test("test carousell if third img has been loaded properly", () => {
  const img = screen.getByAltText("Billions");
  fireEvent.load(img);
});
