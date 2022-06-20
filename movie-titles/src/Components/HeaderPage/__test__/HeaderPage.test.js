import { render, screen, fireEvent } from "@testing-library/react";
import HeaderPage from "../HeaderPage";

const years = [2012, 2013];
const testSetSearchYear = jest.fn();

describe("test HeaderPage", () => {
  it(`render all headerpage component correctly`, () => {
    // img alt text is the movie or series title
    render(
      <HeaderPage
        title={"headerTitle"}
        allYearsForSelect={years}
        testSetSearchYear={testSetSearchYear}
      />
    );
    let selectOption = screen.getByTestId("filterSelect");
    expect(selectOption.value).toBe("all");

    let titleEl = screen.getByText("Popular headerTitle");
    expect(titleEl).toBeInTheDocument();

    let searchEl = screen.getByPlaceholderText("Search...");
    expect(searchEl).toBeInTheDocument();
  });
});
