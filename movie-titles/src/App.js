import "./App.css";
import React, { useState, useEffect } from "react";
import sampleData from "./localData/sample.json";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";

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

  return (
    <React.Fragment>
      {/* <Spinner /> */}
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
    </React.Fragment>
  );
}

export default App;
