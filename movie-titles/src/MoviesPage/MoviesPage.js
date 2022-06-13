import React, { useState, useRef, useEffect } from "react";
import ShowCard from "../Components/showCard/showCard";
import Modal from "../Components/Modal/Modal";
import Spinner from "../Components/Spinner/Spinner";

export default function MoviesPage(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const [movieDetails, setMovieDetails] = useState({});
  const modalBtnElement = useRef(null);

  const setMovie = (m) => {
    setMovieDetails(m);
    // set a delay for setMovieDetails to update the modal before display the modal
    setTimeout(() => {
      modalBtnElement.current.click();
    }, 50);
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

      {loading ? (
        <Spinner />
      ) : (
        <section className="container py-5">
          <div className="row">
            {props.movies.map((m, index) => {
              return (
                <section
                  className="col"
                  key={index}
                  onClick={() => setMovie(m)}
                >
                  <ShowCard
                    imgUrl={m.images["Poster Art"].url}
                    title={m.title}
                  />
                </section>
              );
            })}
          </div>
        </section>
      )}
    </React.Fragment>
  );
}
