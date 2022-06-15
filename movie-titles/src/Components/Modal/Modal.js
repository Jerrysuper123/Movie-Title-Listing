import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "../Spinner/Spinner";
// import defaultImage from "../../Images/defaultImage.jpg";

export default function Modal(props) {
  const [loading, setLoading] = useState(true);
  const [yearFactColor, setYearFactsColor] = useState("RoyalBlue");

  useEffect(() => {
    setLoading(false);
  }, []);

  const [yearFacts, setYearFacts] = useState(
    "unable to retrieve interesting facts about the year, API Failed!"
  );

  const getReleaseYearFacts = async (releaseYear) => {
    if (releaseYear === undefined) {
      return;
    } else {
      try {
        let response = await axios.get(
          `http://numbersapi.com/${releaseYear}/year`
        );
        // display API failure to user if status code is not 200
        if (response.status === 200) {
          setYearFactsColor("RoyalBlue");
          setYearFacts(response.data);
          // https cannot reach out http request for number api
          console.log(response.data);
        } else {
          console.log("error unable to retrieve");
          setYearFacts(
            "Warning: unable to retrieve interesting facts about the year, API Failed!"
          );
          setYearFactsColor("OrangeRed");
        }
      } catch (e) {
        console.log(e);
        setYearFacts(
          "Warning: unable to retrieve interesting facts about the year, API Failed!"
        );
        setYearFactsColor("OrangeRed");
      }
    }
  };

  useEffect(() => {
    getReleaseYearFacts(props.movieDetails.releaseYear);
  }, [props.movieDetails.releaseYear]);

  return (
    <React.Fragment>
      {props.movieDetails.title ? (
        // loading spinner
        loading ? (
          <Spinner />
        ) : (
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
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
                    id="btnCloseModal"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body d-flex flex-column align-items-center">
                  <p>{props.movieDetails.description}</p>
                  <p>type: {props.movieDetails.programType}</p>
                  <p>release year: {props.movieDetails.releaseYear}</p>

                  <p
                    className="yearFacts"
                    style={{ backgroundColor: yearFactColor }}
                  >
                    {yearFacts}
                  </p>
                  <div className="moviePoster">
                    {props.movieDetails.images["Poster Art"].url ? (
                      <img
                        src={props.movieDetails.images["Poster Art"].url}
                        onError={(event) => {
                          event.target.src =
                            "https://raw.githubusercontent.com/Jerrysuper123/Movie-Title-Listing/main/movie-titles/src/Images/defaultImage.jpg";
                          event.onerror = null;
                        }}
                        alt="modal"
                        style={{ width: "14rem" }}
                      />
                    ) : null}
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    id="closeModalBtn"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      ) : null}
    </React.Fragment>
  );
}
