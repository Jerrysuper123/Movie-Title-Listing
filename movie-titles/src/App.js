import "./App.css";
import React, { useState, useEffect } from "react";
import sampleData from "./localData/sample.json";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ProductContext from "./ProductContext";

import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";
import ScrollUpBtn from "./Components/ScrollUpBtn/ScrollUpBtn";
import HomePage from "./HomePage/HomePage";
import SeriesPage from "./SeriesPage/SeriesPage";
import MoviesPage from "./MoviesPage/MoviesPage";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";

function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  // const [allYearsForSelect, setAllYearsForselect] = useState([]);

  // // create unique array of all years available in data
  // const createUniqueYearSet = (array) => {
  //   let yearSet = new Set();
  //   for (let m of array) {
  //     yearSet.add(m.releaseYear);
  //   }

  //   return Array.from(yearSet).sort((a, b) => a - b);
  // };

  const fetchAllShows = async () => {
    // setAllYearsForselect(createUniqueYearSet(sampleData.entries));
    let movieData = sampleData.entries.filter((m) => m.programType === "movie");
    setMovies(movieData);
    let seriesData = sampleData.entries.filter(
      (m) => m.programType === "series"
    );
    setSeries(seriesData);
  };

  useEffect(() => {
    fetchAllShows();
  }, []);

  // this is for search bar string and filter year context, so that we could reuse these components
  const [searchString, setSearchString] = useState("");
  const [searchYear, setSearchYear] = useState("all");

  const context = {
    searchString,
    setSearchString,
    searchYear,
    setSearchYear,
  };

  return (
    <React.Fragment>
      {/* <Spinner /> */}
      <ScrollUpBtn />
      <ProductContext.Provider value={context}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage movies={movies} />} />
            <Route
              path="/series"
              element={
                <SeriesPage
                  series={series}
                  // allYearsForSelect={allYearsForSelect}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <MoviesPage
                  movies={movies}
                  // allYearsForSelect={allYearsForSelect}
                />
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
          <Footer />
        </Router>
      </ProductContext.Provider>
    </React.Fragment>
  );
}

export default App;
