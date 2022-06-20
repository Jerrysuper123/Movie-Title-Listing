import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";
import { HashRouter as Router } from "react-router-dom";

const MockNavBar = () => {
  return (
    <Router>
      <NavBar />
    </Router>
  );
};

describe("render navbar", () => {
  it("render navbar component properly", () => {
    render(<MockNavBar />);
    expect(screen.getByText("DEMO Streaming")).toBeInTheDocument;
    expect(screen.getByText("Watch series")).toBeInTheDocument;
    expect(screen.getByText("Watch movies")).toBeInTheDocument;
    expect(screen.getByText("Log in")).toBeInTheDocument;
    expect(screen.getByText("Start your free trial")).toBeInTheDocument;
  });
});
