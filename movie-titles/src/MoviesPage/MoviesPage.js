import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  useCallback,
} from "react";
import HeaderPage from "../Components/HeaderPage/HeaderPage";
import ShowCard from "../Components/showCard/showCard";
import Modal from "../Components/Modal/Modal";
import Spinner from "../Components/Spinner/Spinner";
import ProductContext from "../ProductContext";
import { createUniqueYearSet } from "../Util";
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

  /*filter movie bar starts here*/

  const filterMovieByName = useCallback(() => {
    let name = context.searchString;
    if (name === "") {
      setAllMovies(props.movies);
    } else {
      let string = name.toLowerCase();
      let filteredMovies = props.movies.filter((m) =>
        m.title.toLowerCase().includes(string)
      );
      setAllMovies(filteredMovies);
    }
  }, [context.searchString, props.movies]);

  //do not render below when first mounted
  const isMounted = useRef(false);

  useEffect(() => {
    // do not filter when first loaded
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      filterMovieByName();
    }
  }, [filterMovieByName]);

  /*Filter year starts here*/
  const filterMoviesByYear = useCallback(() => {
    let year = context.searchYear;
    if (year === "all") {
      setAllMovies(props.movies);
    } else {
      let filteredMovies = props.movies.filter(
        (m) => m.releaseYear.toString() === year
      );
      setAllMovies(filteredMovies);
    }
  }, [context.searchYear, props.movies]);

  useEffect(() => {
    filterMoviesByYear();
  }, [filterMoviesByYear]);

  // for all year selection loading component
  const [allYearsForSelect, setAllYearsForselect] = useState([]);

  // clear all search results when component unmount
  const clearAllSearch = useCallback(() => {
    context.setSearchString("");
    context.setSearchYear("all");
  }, []);

  useEffect(() => {
    return () => {
      // Anything in here is fired on component unmount.
      clearAllSearch();
    };
  }, [clearAllSearch]);

  return (
    <React.Fragment>
      <HeaderPage allYearsForSelect={allYearsForSelect} title="Movies" />

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
