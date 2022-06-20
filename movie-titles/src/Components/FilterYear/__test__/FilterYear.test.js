import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import FilterYear from "../FilterYear";

const years = [2012, 2013];
const testSetSearchYear = jest.fn();

describe("test the filter year select drop down list", () => {
  it(`initialize select option with the value of "all`, () => {
    // img alt text is the movie or series title
    render(<FilterYear allYearsForSelect={years} />);
    let selectOption = screen.getByTestId("filterSelect");
    expect(selectOption.value).toBe("all");
  });

  it(`reselect value to be "2012`, () => {
    // img alt text is the movie or series title
    render(
      <FilterYear
        allYearsForSelect={years}
        testSetSearchYear={testSetSearchYear}
      />
    );
    let selectOption = screen.getByTestId("filterSelect");
    fireEvent.change(selectOption, {
      target: { value: "2012" },
    });
    expect(selectOption.value).toBe("2012");
  });
});
