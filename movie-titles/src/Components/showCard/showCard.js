import React, { useState } from "react";
import "./style.css";

export default function ShowCard(props) {
  const [style, setStyle] = useState({ display: "none" });

  return (
    <div
      className="showCard"
      onMouseEnter={(e) => {
        setStyle({ display: "block" });
      }}
      onMouseLeave={(e) => {
        setStyle({ display: "none" });
      }}
    >
      <img
        src={props.imgUrl}
        className="card-img-top"
        alt={props.title}
        onError={(event) => {
          event.target.src =
            "https://raw.githubusercontent.com/Jerrysuper123/Movie-Title-Listing/main/movie-titles/src/Images/defaultImage.jpg";
          event.onerror = null;
        }}
      />
      <p className="card-text mt-2 cardTitle">{props.title}</p>

      <section className="synopsis px-2" style={style}>
        <h6 className="pt-5">Synopsis:</h6>
        <p>{props.description.slice(0, 70)}...</p>
      </section>
    </div>
  );
}
