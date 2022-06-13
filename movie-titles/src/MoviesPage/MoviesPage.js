import React from "react";
import ShowCard from "../Components/showCard/showCard";

export default function MoviesPage(props) {
  return (
    <React.Fragment>
      {props.movies.map((m) => {
        return <ShowCard imgUrl={m.images["Poster Art"].url} title={m.title} />;
      })}
    </React.Fragment>
  );
}
