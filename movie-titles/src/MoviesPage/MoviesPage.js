import React, { useState, useRef, useEffect } from "react";
import ShowCard from "../Components/showCard/showCard";
import Modal from "../Components/Modal/Modal";
import Spinner from "../Components/Spinner/Spinner";
import "./style.css";

export default function MoviesPage(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const [allMovies, setAllMovies] = useState([]);
  useEffect(() => {
    setAllMovies(props.movies);
  }, [props.movies]);

  const [movieDetails, setMovieDetails] = useState({});
  const modalBtnElement = useRef(null);

  const setMovie = (m) => {
    setMovieDetails(m);
    // set a delay for setMovieDetails to update the modal before display the modal
    setTimeout(() => {
      modalBtnElement.current.click();
    }, 50);
  };

  //search movie by name function
  const [searchString, setSearchString] = useState("");
  const handleSearchString = (e) => {
    setSearchString(e.target.value);

    let string = searchString.toLowerCase();
    let filteredMovies = props.movies.filter((m) =>
      m.title.toLowerCase().includes(string)
    );
    setAllMovies(filteredMovies);
  };

  useEffect(() => {
    if (searchString === "") {
      setAllMovies(props.movies);
    }
  }, [searchString, props.movies]);

  //search movie by year function
  const [searchYear, setSearchYear] = useState("");
  const handleSelect = (e) => {
    setSearchYear(e.target.value);

    let filteredMovies = props.movies.filter(
      (m) => m.releaseYear.toString() === searchYear
    );
    setAllMovies(filteredMovies);
  };

  useEffect(() => {
    if (searchYear === "all") {
      setAllMovies(props.movies);
    }
  }, [searchYear, props.movies]);

  // show and hide synopsis when hover over
  // const [showSynosis, setShowSynopsis] = useState(false);
  // const showSynopsis = (e) => {
  //   let synoposis = e.target.childNodes[1];
  //   synoposis.style.display = "block";
  // };

  // const hideSynopsis = (e) => {
  //   // let synoposis = e.target.nextSibling;
  //   // synoposis.style.display = "none";
  //   // let synoposis = e.target.childNodes[1];
  //   // synoposis.style.display = "none";
  // };

  return (
    <React.Fragment>
      <section className="navIntro">
        <div className="container d-flex justify-content-between align-items-center">
          <span className="pageHeader">Popular Movies</span>
          <span className="searchInputContainer d-flex align-items-center">
            <section className="mb-1">
              <input
                className="me-2 searchInput"
                type="search"
                placeholder="Search by name..."
                aria-label="Search"
                name="searchString"
                value={searchString}
                // ref={inputRef}
                onChange={handleSearchString}
                // onBlur={toggleBtweenBtnBar}
              />
              <i className="fa-solid fa-magnifying-glass searchGlass"></i>
            </section>
          </span>
          <span className="yearFilter">
            <label className="filterLabel me-1">year: </label>
            <select
              className="selectOptions"
              value={searchYear}
              onChange={handleSelect}
            >
              <option value="all">All</option>
              <option value="2012">2012</option>
              <option value="2012">2013</option>
            </select>
          </span>
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
            {allMovies.map((m, index) => {
              return (
                <section
                  className="col movieCard"
                  key={index}
                  onClick={() => setMovie(m)}
                  // onMouseOver={showSynopsis}
                  // onMouseOut={hideSynopsis}
                >
                  <div>
                    <ShowCard
                      imgUrl={m.images["Poster Art"].url}
                      title={m.title}
                    />
                  </div>

                  {/* <section className="synopsis p-2">
                    <h6>Synosis:</h6>
                    <p>{m.description.slice(0, 120)}...</p>
                  </section> */}
                </section>
              );
            })}
          </div>
        </section>
      )}
    </React.Fragment>
  );
}
