import React, { useEffect } from "react";
import "./style.css";
import GenreCard from "../Components/GenreCard/GenreCard";
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
          <span>Popular Titles</span>
        </div>
      </section>
      {/* carousell starts here */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <section className="threeImage d-flex container-fluid">
              <img
                src={props.movies[0].images["Poster Art"].url}
                className="d-block w-100"
                alt={props.movies[0].title}
              />
              <img
                src={props.movies[1].images["Poster Art"].url}
                className="d-block w-100"
                alt={props.movies[1].title}
              />
              <img
                src={props.movies[2].images["Poster Art"].url}
                className="d-block w-100"
                alt={props.movies[2].title}
              />
            </section>
          </div>
          <div className="carousel-item">
            <section className="threeImage d-flex">
              <img
                src={props.movies[3].images["Poster Art"].url}
                className="d-block w-100"
                alt={props.movies[3].title}
              />
              <img
                src={props.movies[4].images["Poster Art"].url}
                className="d-block w-100"
                alt={props.movies[4].title}
              />
              <img
                src={props.movies[5].images["Poster Art"].url}
                className="d-block w-100"
                alt={props.movies[5].title}
              />
            </section>
          </div>
          <div className="carousel-item">
            <section className="threeImage d-flex">
              <img
                src={props.movies[6].images["Poster Art"].url}
                className="d-block w-100"
                alt={props.movies[6].title}
              />
              <img
                src={props.movies[7].images["Poster Art"].url}
                className="d-block w-100"
                alt={props.movies[7].title}
              />
              <img
                src={props.movies[8].images["Poster Art"].url}
                className="d-block w-100"
                alt={props.movies[8].title}
              />
            </section>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* carousell ends here */}

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
