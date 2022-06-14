import "./App.css";
import React, { useState, useEffect } from "react";
import sampleData from "./localData/sample.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/Navbar/NavBar";
import Footer from "./Components/Footer/Footer";

import HomePage from "./HomePage/HomePage";
import SeriesPage from "./SeriesPage/SeriesPage";
import MoviesPage from "./MoviesPage/MoviesPage";
// import { fetchAllShows } from "./Util/Util.js";

function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  // const fetchAllShows = (sampleData) => {
  //   let movieData = sampleData.entries.filter((m) => m.programType === "movie");
  //   setMovies(movieData);
  //   let seriesData = sampleData.entries.filter(
  //     (m) => m.programType === "series"
  //   );
  //   setSeries(seriesData);
  //   // return movieData for testing
  //   return movieData;
  // };

  const fetchAllShows = (sampleData, type) => {
    let showData = sampleData.entries.filter((m) => m.programType === type);
    return showData;
  };

  useEffect(() => {
    setMovies(fetchAllShows(sampleData, "movie"));
    setSeries(fetchAllShows(sampleData, "series"));
  }, []);

  return (
    <React.Fragment>
      {/* <Spinner /> */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/series" element={<SeriesPage series={series} />} />
          <Route path="/movies" element={<MoviesPage movies={movies} />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
