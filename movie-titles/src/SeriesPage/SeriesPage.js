import React, { useState, useRef } from "react";
import ShowCard from "../Components/showCard/showCard";
import Modal from "../Components/Modal/Modal";

export default function SeriesPage(props) {
  const [seriesDetails, setSeriesDetails] = useState({});
  const modalBtnElement = useRef(null);

  const setSeries = (m) => {
    setSeriesDetails(m);
    modalBtnElement.current.click();
  };

  return (
    <React.Fragment>
      <section className="navIntro">
        <div className="container">
          <span>Popular Series</span>
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
        Launch series details
      </button>

      <Modal movieDetails={seriesDetails} />

      <section className="container py-5">
        <div className="row">
          {props.series.map((m, index) => {
            return (
              <section
                className="col"
                key={index}
                onClick={() => {
                  setSeries(m);
                }}
              >
                <ShowCard imgUrl={m.images["Poster Art"].url} title={m.title} />
              </section>
            );
          })}
        </div>
      </section>
    </React.Fragment>
  );
}
