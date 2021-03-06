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
          console.log(response);
        }

        // else if (response.status === 500 && response.status === 503) {
        //   console.log("error unable to retrieve");
        //   setYearFacts("Warning: API Failed, internal server errors!");
        //   setYearFactsColor("OrangeRed");
        // } else if (response.status === 404) {
        //   // console.log(response);
        //   setYearFacts("Warning: API 404 not found!");
        //   setYearFactsColor("OrangeRed");
        // } else {
        //   setYearFacts("Warning: API failed for some reasons");
        //   setYearFactsColor("OrangeRed");
        // }
      } catch (e) {
        console.log(e);
        setYearFacts(e.message);
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
                  <h5
                    className="modal-title text-primary"
                    id="exampleModalLabel"
                  >
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
                  <p className="modalBodyText">
                    {props.movieDetails.description}
                  </p>
                  <h6>type: {props.movieDetails.programType}</h6>
                  <h6>release year: {props.movieDetails.releaseYear}</h6>
                  <h3 className="text-primary">
                    Interesting facts about the year
                  </h3>
                  <p
                    className="yearFacts"
                    style={{ backgroundColor: yearFactColor }}
                    data-testid="releaseYear"
                  >
                    {yearFacts}
                  </p>
                  <div className="moviePoster mb-3">
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
                {/* 
                <div className="modal-footer">
                  <button
                    type="button"
                    id="closeModalBtn"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        )
      ) : null}
    </React.Fragment>
  );
}
