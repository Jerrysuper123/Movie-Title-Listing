import React from "react";
import "./style.css";
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

      <section className="homePageBody d-flex flex-column flex-md-row py-5 container mb-5">
        <div className="me-4">
          <Link to="/series">
            <GenreCard title="SERIES" bodyText="Popular Series" />
          </Link>
        </div>

        <div className="me-4">
          <Link to="/movies">
            <GenreCard title="MOVIES" bodyText="Popular Movies" />
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
}
