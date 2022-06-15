import React from "react";

export default function Carousell(props) {
  return (
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
          <section className="threeImage d-flex">
            <img
              src={props.movies[0].images["Poster Art"].url}
              className="d-block w-100"
              alt={props.movies[0].title}
            />
            <img
              src={props.movies[1].images["Poster Art"].url}
              className="d-block w-100 hideImg"
              alt={props.movies[1].title}
            />
            <img
              src={props.movies[2].images["Poster Art"].url}
              className="d-block w-100 hideImg"
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
