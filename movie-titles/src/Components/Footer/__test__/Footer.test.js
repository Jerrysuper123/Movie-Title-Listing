import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import { HashRouter as Router } from "react-router-dom";

const MockFooter = () => {
  return (
    <Router>
      <Footer />
    </Router>
  );
};

describe("render footer", () => {
  it("render footer component properly", () => {
    render(<MockFooter />);
    expect(screen.getByTestId("footer")).toBeInTheDocument;
  });
});
