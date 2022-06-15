import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useContext,
} from "react";
import ProductContext from "../ProductContext";
import HeaderPage from "../Components/HeaderPage/HeaderPage";
import ShowCard from "../Components/showCard/showCard";
import Modal from "../Components/Modal/Modal";
import Spinner from "../Components/Spinner/Spinner";
import { createUniqueYearSet } from "../Util";

export default function SeriesPage(props) {
  let context = useContext(ProductContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const [seriesDetails, setSeriesDetails] = useState({});
  const modalBtnElement = useRef(null);

  const setSeries = (m) => {
    setSeriesDetails(m);
    setTimeout(() => {
      modalBtnElement.current.click();
    }, 50);
  };

  // save all series in allSeries when app first loaded
  const [allSeries, setAllSeries] = useState([]);
  useEffect(() => {
    setAllSeries(props.series);
    setAllYearsForselect(createUniqueYearSet(props.series));
  }, [props.series]);

  /*filter movie bar starts here*/

  const filterSeriesByName = useCallback(() => {
    let name = context.searchString;
    if (name === "") {
      setAllSeries(props.series);
    } else {
      let string = name.toLowerCase();
      let filteredMovies = props.series.filter((m) =>
        m.title.toLowerCase().includes(string)
      );
      setAllSeries(filteredMovies);
    }
  }, [context.searchString, props.series]);

  //do not render below when first mounted
  const isMounted = useRef(false);

  useEffect(() => {
    // do not filter when first loaded
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      filterSeriesByName();
    }
  }, [filterSeriesByName]);

  /*Filter year starts here*/
  const filterMoviesByYear = useCallback(() => {
    let year = context.searchYear;
    if (year === "all") {
      setAllSeries(props.series);
    } else {
      let filteredMovies = props.series.filter(
        (m) => m.releaseYear.toString() === year
      );
      setAllSeries(filteredMovies);
    }
  }, [context.searchYear, props.series]);

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
      <HeaderPage allYearsForSelect={allYearsForSelect} title="Series" />

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

      {loading ? (
        <Spinner />
      ) : (
        <section className="container py-5">
          <div className="row">
            {allSeries.map((m, index) => {
              return (
                <section
                  className="col"
                  key={index}
                  onClick={() => {
                    setSeries(m);
                  }}
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
