import React, { useState, useRef } from "react";
import ShowCard from "../Components/showCard/showCard";
import Modal from "../Components/Modal/Modal";

export default function MoviesPage(props) {
  const [movieDetails, setMovieDetails] = useState({});
  // const [showModal, setShowModal] = useState("none");
  const modalBtnElement = useRef(null);

  const setMovie = (m) => {
    setMovieDetails(m);
    modalBtnElement.current.click();
    // show modal visible
    // setShowModal("block");
  };

  return (
    <React.Fragment>
      {/* {movieDetails.title ? (
        <Modal
          movieDetails={movieDetails}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : null} */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={modalBtnElement}
        style={{ display: "none" }}
      >
        Launch demo modal
      </button>
      <Modal movieDetails={movieDetails} />

      <section className="d-flex flex-column align-items-center">
        {props.movies.map((m, index) => {
          return (
            <section key={index} onClick={() => setMovie(m)}>
              <ShowCard imgUrl={m.images["Poster Art"].url} title={m.title} />
            </section>
          );
        })}
      </section>
    </React.Fragment>
  );
}
