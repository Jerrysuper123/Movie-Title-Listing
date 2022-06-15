import React, { useContext } from "react";
import ProductContext from "../../ProductContext";

export default function FilterYear(props) {
  let context = useContext(ProductContext);
  const handleSelect = (e) => {
    context.setSearchYear(e.target.value);

    // let filteredMovies = props.movies.filter(
    //   (m) => m.releaseYear.toString() === context.searchYear
    // );
    // setAllMovies(filteredMovies);
  };

  return (
    <span className="yearFilter">
      <label className="filterLabel me-2">year: </label>
      <select
        className="selectOptions"
        value={context.searchYear}
        onChange={handleSelect}
      >
        <option value="all">All</option>
        {props.allYearsForSelect.map((year) => {
          return (
            <React.Fragment key={year}>
              <option value={year}>{year}</option>
            </React.Fragment>
          );
        })}
      </select>
    </span>
  );
}
