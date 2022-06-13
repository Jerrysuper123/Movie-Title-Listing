import React, { useState, useRef } from "react";
import ShowCard from "../Components/showCard/showCard";
import Modal from "../Components/Modal/Modal";

export default function MoviesPage(props) {
  const [movieDetails, setMovieDetails] = useState({});
  const modalBtnElement = useRef(null);

  const setMovie = (m) => {
    setMovieDetails(m);
    modalBtnElement.current.click();
  };

  return (
    <React.Fragment>
      <section className="navIntro">
        <div className="container">
          <span>Popular Movies</span>
        </div>
      </section>

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={modalBtnElement}
        style={{ display: "none" }}
      >
        Launch movie details
      </button>

      <Modal movieDetails={movieDetails} />

      <section className="container py-5">
        <div className="row">
          {props.movies.map((m, index) => {
            return (
              <section className="col" key={index} onClick={() => setMovie(m)}>
                <ShowCard imgUrl={m.images["Poster Art"].url} title={m.title} />
              </section>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
}
