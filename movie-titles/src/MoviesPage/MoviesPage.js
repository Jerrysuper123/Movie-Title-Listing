import React, { useState } from "react";
import ShowCard from "../Components/showCard/showCard";
import Modal from "../Components/Modal/Modal";

export default function MoviesPage(props) {
  const [movieDetails, setMovieDetails] = useState({});

  const setMovie = () => {
    setMovieDetails("Onemovie");
  };

  return (
    <React.Fragment>
      <Modal />
      <section
        // type="button"
        // className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </section>

      <section className="d-flex flex-column align-items-center">
        {props.movies.map((m, index) => {
          return (
            <ShowCard
              key={index}
              imgUrl={m.images["Poster Art"].url}
              title={m.title}
              onClick={setMovie}
            />
          );
        })}
      </section>
    </React.Fragment>
  );
}
