import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavBar from "./Components/Navbar/NavBar";
import ShowCard from "./Components/showCard/showCard";
import Footer from "./Components/Footer/Footer";

import HomePage from "./HomePage/HomePage";
import SeriesPage from "./SeriesPage/SeriesPage";
import MoviesPage from "./MoviesPage/MoviesPage";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/series">series page</Link>
            </li>
            <li>
              <Link to="/movies">movies page</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/series" element={<SeriesPage />} />
          <Route path="/movies" element={<MoviesPage />} />
        </Routes>
      </Router>

      <Footer />
    </React.Fragment>
  );
}

export default App;
