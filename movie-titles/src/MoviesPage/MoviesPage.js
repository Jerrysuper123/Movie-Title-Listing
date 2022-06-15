import React, { useState, useRef, useEffect, useContext } from "react";
import ShowCard from "../Components/showCard/showCard";
import Modal from "../Components/Modal/Modal";
import Spinner from "../Components/Spinner/Spinner";
import SearchName from "../Components/SearchName/SearchName";
import ProductContext from "../ProductContext";
import "./style.css";

export default function MoviesPage(props) {
  let context = useContext(ProductContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const [allMovies, setAllMovies] = useState([]);
  useEffect(() => {
    setAllMovies(props.movies);
    setAllYearsForselect(createUniqueYearSet(props.movies));
  }, [props.movies]);

  // add pagination to the page
  const [allItems, setTotalItems] = useState(21);
  const addMoreItems = () => {
    let totalItems = allItems + 21;
    if (totalItems > allMovies.length) {
      totalItems = allMovies.length;
    }
    setTotalItems(totalItems);
  };

  const [displayMovies, setDisplayMovies] = useState([]);

  useEffect(() => {
    let clone = allMovies.slice(0, allItems);
    setDisplayMovies(clone);
  }, [allMovies, allItems]);

  // pagination ends here

  // modal starts here

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

  // const [searchString, setSearchString] = useState("");
  // const handleSearchString = (e) => {
  //   context.setSearchString(e.target.value);

  // };

  useEffect(() => {
    let string = context.searchString.toLowerCase();
    let filteredMovies = props.movies.filter((m) =>
      m.title.toLowerCase().includes(string)
    );
    setAllMovies(filteredMovies);
  }, [context.searchString, props.movies]);

  useEffect(() => {
    if (context.searchString === "") {
      setAllMovies(props.movies);
    }
  }, [context.searchString, props.movies]);

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

  // for all year selection loading component
  const [allYearsForSelect, setAllYearsForselect] = useState([]);
  // create unique array of all years available in data
  const createUniqueYearSet = (array) => {
    let yearSet = new Set();
    for (let m of array) {
      yearSet.add(m.releaseYear);
    }

    return Array.from(yearSet).sort((a, b) => a - b);
  };
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
          {/* 
          <span className="searchInputContainer d-flex align-items-center">
            <section className="mb-1">
              <input
                className="ms-2 searchInput"
                type="search"
                placeholder="Search by name..."
                aria-label="Search"
                name="searchString"
                value={context.searchString}
                // ref={inputRef}
                onChange={handleSearchString}
                // onBlur={toggleBtweenBtnBar}
              />
              <i className="fa-solid fa-magnifying-glass searchGlass"></i>
            </section>
          </span> */}

          <SearchName />

          <span className="yearFilter">
            <label className="filterLabel me-2">year: </label>
            <select
              className="selectOptions"
              value={searchYear}
              onChange={handleSelect}
            >
              <option value="all">All</option>
              {allYearsForSelect.map((year) => {
                return (
                  <React.Fragment key={year}>
                    <option value={year}>{year}</option>
                  </React.Fragment>
                );
              })}

              {/* <option value="2012">2012</option>
              <option value="2012">2013</option> */}
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
            {displayMovies.map((m, index) => {
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
          {/* if we have come to end , we do not display load more button */}
          {displayMovies.length === allMovies.length ? null : (
            <div className="text-center mt-5">
              <input
                type="submit"
                className="mt-3 userBtn"
                value="Load more"
                onClick={addMoreItems}
              />
            </div>
          )}
        </section>
      )}
    </React.Fragment>
  );
}
