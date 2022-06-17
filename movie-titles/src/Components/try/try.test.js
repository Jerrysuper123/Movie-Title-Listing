import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Try from "./try";

// test suite - group
describe("<try/> component", () => {
  test("renders try as a component", () => {
    render(<Try />);
    /* /regular expression/case insensitive */
    const linkElement = screen.getByText("try");
    expect(linkElement).toBeInTheDocument();
  });

  test("render no change when button is NOT clicked", () => {
    render(<Try />);
    const pElement = screen.getByText("no change");
    expect(pElement).toBeInTheDocument();
  });

  test("render change when button is clicked", () => {
    //arrange
    render(<Try />);

    //act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    //assert
    const pElement = screen.getByText("changed");
    expect(pElement).toBeInTheDocument();
  });

  //test if click the paragraph is gone
  test("check if there is not render no change if the btn is click", () => {
    render(<Try />);
    //act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    //getByText would throw an error if not found, so use query
    //queryByText would return a null if not found
    const pElement = screen.queryByText("no change");
    expect(pElement).toBeNull();
  });
});
