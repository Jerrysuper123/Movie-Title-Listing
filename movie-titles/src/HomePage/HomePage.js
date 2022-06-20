import React, { useEffect } from "react";
import "animate.css";
import "./style.css";
import GenreCard from "../Components/GenreCard/GenreCard";
import Carousell from "../Components/Carousell/Carousell";
import { Link } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";
import { useState } from "react";

export default function HomePage(props) {
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
          <span data-testid="homeHeader">Popular Titles</span>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          <section className="banner">
            {/* carousell starts here */}
            {props.movies ? <Carousell movies={props.movies} /> : null}

            {/* carousell ends here */}
            <section className="cta text-center p-5 animate__animated animate__bounce">
              <h1>Start your trial today!</h1>
              <Link to="/signup">
                <button className="btn btn-danger" id="ctaBtn">
                  Start here
                </button>
              </Link>
            </section>
          </section>

          <section className="py-5 container mb-5">
            <h3>Select show by categories</h3>
            <section
              id="homePageBody"
              className="homePageBody d-flex flex-column flex-md-row "
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
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
