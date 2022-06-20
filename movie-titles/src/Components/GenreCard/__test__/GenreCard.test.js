import { render, screen } from "@testing-library/react";
import GenreCard from "../GenreCard";
import { HashRouter as Router } from "react-router-dom";

const MockGenreCard = () => {
  return (
    <Router>
      <GenreCard title={"my title"} />
    </Router>
  );
};

describe("render GenreCard properly", () => {
  it(`render Genre card with "my title"`, () => {
    render(<MockGenreCard />);
    const h1Element = screen.getByText(/my title/i);
    expect(h1Element).toBeInTheDocument();
  });
});
