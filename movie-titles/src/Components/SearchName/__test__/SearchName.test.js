import { render, screen, fireEvent } from "@testing-library/react";
import SearchName from "../SearchName";

const testSetSearchString = jest.fn();

describe("render search name", () => {
  it(`reselect value to be "2012`, () => {
    // img alt text is the movie or series title
    render(<SearchName testSetSearchString={testSetSearchString} />);
    let searchInput = screen.getByPlaceholderText(/search.../i);
    fireEvent.change(searchInput, {
      target: { value: "hunger" },
    });
    expect(searchInput.value).toBe("hunger");
  });
});
