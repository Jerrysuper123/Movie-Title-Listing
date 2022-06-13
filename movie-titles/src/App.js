import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import ShowCard from "./Components/showCard/showCard";
import Footer from "./Components/Footer/Footer";

import HomePage from "./HomePage/HomePage";
import SeriesPage from "./SeriesPage/SeriesPage";
import MoviesPage from "./MoviesPage/MoviesPage";

function App() {
  return (
    <div className="container">
      <NavBar />
      <HomePage />
      <SeriesPage />
      <MoviesPage />
      <Footer />
    </div>
  );
}

export default App;
