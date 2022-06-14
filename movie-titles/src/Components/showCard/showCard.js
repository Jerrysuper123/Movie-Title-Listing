import React from "react";
import "./style.css";
// import defaultImage from "../../Images/defaultImage.jpg";

export default function ShowCard(props) {
  return (
    <div className="showCard">
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
      <p className="card-text mt-2">{props.title}</p>
    </div>
  );
}
