import React from "react";
import "./style.css";

export default function ShowCard(props) {
  return (
    <div className="showCard">
      <img src={props.imgUrl} className="card-img-top" alt="..." />
      <p className="card-text mt-2">{props.title}</p>
    </div>
  );
}
