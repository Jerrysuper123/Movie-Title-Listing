import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("renders learn react link", () => {
  let component = render(<HomePage />);

  //   const linkElement = screen.getByText(/Popular Titles/i);
  //   expect(linkElement).toBeInTheDocument();
  const header = component.getByTestId("homeHeader");
  expect(header.textContent).toBe("Popular Titles");
});
