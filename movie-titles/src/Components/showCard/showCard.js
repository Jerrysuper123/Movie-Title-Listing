import React from "react";
import "./style.css";

export default function ShowCard(props) {
  return (
    <div className="showCard">
      <img src={props.imgUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text">{props.title}</p>
      </div>
    </div>
  );
}
