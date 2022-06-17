import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  /* /regular expression/case insensitive */
  const linkElement = screen.getByText(/series/i);
  expect(linkElement).toBeInTheDocument();
});
