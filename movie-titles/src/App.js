import "./App.css";
import React, { useState, useEffect } from "react";
import sampleData from "./localData/sample.json";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import NavBar from "./Components/Navbar/NavBar";
import ShowCard from "./Components/showCard/showCard";
import Footer from "./Components/Footer/Footer";

import HomePage from "./HomePage/HomePage";
import SeriesPage from "./SeriesPage/SeriesPage";
import MoviesPage from "./MoviesPage/MoviesPage";

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
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/series" element={<SeriesPage series={series} />} />
          <Route path="/movies" element={<MoviesPage movies={movies} />} />
        </Routes>
      </Router>

      <Footer />
    </React.Fragment>
  );
}

export default App;
