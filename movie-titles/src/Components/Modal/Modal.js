import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "../Spinner/Spinner";

export default function Modal(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const [yearFacts, setYearFacts] = useState("");

  const getReleaseYearFacts = async (releaseYear) => {
    //API Format: http://numbersapi.com/1969/year
    let response = await axios.get(`http://numbersapi.com/${releaseYear}/year`);
    setYearFacts(response.data);
  };

  useEffect(() => {
    getReleaseYearFacts(props.movieDetails.releaseYear);
  }, [props.movieDetails.releaseYear]);

  return (
    <React.Fragment>
      {!props.movieDetails.title || loading ? (
        <Spinner />
      ) : (
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  {props.movieDetails.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex flex-column align-items-center">
                <p>{props.movieDetails.description}</p>
                <p>type: {props.movieDetails.programType}</p>
                <p>release year: {props.movieDetails.releaseYear}</p>
                <p className="yearFacts">{yearFacts}</p>
                <div className="moviePoster">
                  {props.movieDetails.images["Poster Art"].url ? (
                    <img
                      src={props.movieDetails.images["Poster Art"].url}
                      alt="modal"
                      style={{ width: "14rem" }}
                    />
                  ) : null}
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
