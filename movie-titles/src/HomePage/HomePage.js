import React from "react";
import GenreCard from "../Components/GenreCard/GenreCard";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <React.Fragment>
      <section className="navIntro">
        <div className="container">
          <span>Popular Titles</span>
        </div>
      </section>

      <section className="d-flex flex-column align-items-center p-5">
        <Link to="/series">
          <GenreCard title="SERIES" bodyText="Popular Series" />
        </Link>

        <Link to="/movies">
          <GenreCard title="MOVIES" bodyText="Popular Movies" />
        </Link>
      </section>
    </React.Fragment>
  );
}
