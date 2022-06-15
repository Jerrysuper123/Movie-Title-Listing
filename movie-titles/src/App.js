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

  const fetchAllShows = async () => {
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
          <Route path="/series" element={<SeriesPage series={series} />} />
          <Route path="/movies" element={<MoviesPage movies={movies} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
