import React, { useEffect } from "react";
import "./style.css";
import GenreCard from "../Components/GenreCard/GenreCard";
import { Link } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import { useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  // mimic componentdidMount
  //use setTimeout only to demo the spinner, do not push this code into
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <React.Fragment>
      <section className="navIntro">
        <div className="container">
          <span>Popular Titles</span>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : (
        <section
          id="homePageBody"
          className="homePageBody d-flex flex-column flex-md-row py-5 container mb-5"
        >
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
      )}
    </React.Fragment>
  );
}
