import React from "react";
import "./style.css";
import clapperboard from "../../Images/clapperboard.png";

export default function GenreCard(props) {
  return (
    <div className="genreCard">
      <section className="genreInnerCard d-flex justify-content-center align-items-center">
        <img src={clapperboard} className="card-img-top genreImg" alt="movie" />
      </section>
      <section className="text-center genreText">
        <h1>{props.title}</h1>
      </section>

      <p className="card-text mt-2">{props.bodyText}</p>
    </div>
  );
}
