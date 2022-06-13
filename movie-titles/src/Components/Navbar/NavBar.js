import React from "react";
import "./style.css";

export default function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid navbarBgColor">
          <a className="navbar-brand ms-5" href="#">
            DEMO Streaming
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa-solid fa-bars text-light"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-5">
              <li className="nav-item ms-3">
                <a className="nav-link logInBtn" aria-current="page" href="#">
                  Log in
                </a>
              </li>
              <li className="nav-item ms-2">
                <a className="nav-link trialBtn ps-3" href="#">
                  Start your free trial
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="navIntro">
        <span className="ms-5">Popular Series</span>
      </section>
    </React.Fragment>
  );
}
