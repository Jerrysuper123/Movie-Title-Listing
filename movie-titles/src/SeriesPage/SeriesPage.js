import React from "react";
import ShowCard from "../Components/showCard/showCard";

export default function SeriesPage(props) {
  return (
    <React.Fragment>
      <section className="d-flex flex-column align-items-center">
        {props.series.map((m, index) => {
          return (
            <ShowCard
              key={index}
              imgUrl={m.images["Poster Art"].url}
              title={m.title}
            />
          );
        })}
      </section>
    </React.Fragment>
  );
}
