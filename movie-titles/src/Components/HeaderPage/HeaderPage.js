import React from "react";
import SearchName from "../SearchName/SearchName";
import FilterYear from "../FilterYear/FilterYear";

export default function HeaderPage(props) {
  return (
    <section className="navIntro">
      <div className="container d-flex justify-content-between align-items-center">
        <span className="pageHeader">Popular {props.title}</span>
        <SearchName />
        <FilterYear allYearsForSelect={props.allYearsForSelect} />
      </div>
    </section>
  );
}
