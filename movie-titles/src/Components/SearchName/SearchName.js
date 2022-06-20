import React, { useContext } from "react";
import ProductContext from "../../ProductContext";
import "./style.css";

export default function SearchName() {
  let context = useContext(ProductContext);
  const handleSearchString = (e) => {
    context.setSearchString(e.target.value);
  };

  return (
    <span
      id="searchBar"
      className="searchInputContainer d-flex align-items-center"
    >
      <section className="mb-1">
        <input
          data-testid="searchBarInput"
          className="ms-2 searchInput"
          type="search"
          placeholder="Search..."
          aria-label="Search"
          name="searchString"
          value={context.searchString}
          // ref={inputRef}
          onChange={handleSearchString}
          // onBlur={toggleBtweenBtnBar}
        />
        <i className="fa-solid fa-magnifying-glass searchGlass"></i>
      </section>
    </span>
  );
}
