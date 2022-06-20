import React, { useContext } from "react";
import ProductContext from "../../ProductContext";
import "./style.css";

export default function FilterYear(props) {
  let context = useContext(ProductContext);
  const handleSelect = (e) => {
    context.setSearchYear(e.target.value);
  };

  return (
    <div>
      <span className="yearFilter d-none d-md-block d-flex align-items-center">
        <label className="filterLabel me-2">Year: </label>
        <select
          data-testid="filterSelect"
          id="webSelectOptions"
          className="selectOptions"
          value={context.searchYear}
          onChange={handleSelect}
        >
          <option value="all">all time</option>

          {props.allYearsForSelect.map((year) => {
            return (
              <React.Fragment key={year}>
                <option value={year}>{year}</option>
              </React.Fragment>
            );
          })}
        </select>
      </span>

      <div className="dropdown d-block d-md-none">
        <button
          className="ms-2 dropdown-toggle dropdownBtn"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa-solid fa-filter"></i>
        </button>
        <ul
          className="dropdown-menu dropdownBg"
          aria-labelledby="dropdownMenuButton1"
        >
          <li>
            <span className="ps-2 yearFilter d-flex align-items-center">
              <label className="filterLabel me-2">Year: </label>
              <select
                id="mobileSelectOptions"
                className="selectOptions border"
                value={context.searchYear}
                onChange={handleSelect}
              >
                <option value="all">all time</option>

                {props.allYearsForSelect.map((year) => {
                  return (
                    <React.Fragment key={year}>
                      <option value={year}>{year}</option>
                    </React.Fragment>
                  );
                })}
              </select>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
