import React from "react";
import GenreCard from "../Components/GenreCard/GenreCard";

export default function HomePage() {
  return (
    <React.Fragment>
      <section className="d-flex flex-column align-items-center">
        <GenreCard title="SERIES" bodyText="Popular Series" />
        <GenreCard title="MOVIES" bodyText="Popular Movies" />
      </section>
    </React.Fragment>
  );
}
