import React from "react";
import "./style.css";
// import AppStore from "../../Images/appStore.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="page-footer font-small blue p-4 text-center">
      <main className="container">
        <section className="footerHeader d-flex flex-column flex-md-row">
          <span className="pe-3 borderRight footerHome">
            <Link to="/">Home</Link>
          </span>
          <span className="pe-3 ps-3 borderRight">Terms and Conditions</span>
          <span className="pe-3 ps-3 borderRight">Privacy Policy</span>
          <span className="pe-3 ps-3 borderRight">Collection Statement</span>
          <span className="pe-3 ps-3 borderRight">Help</span>
          <span className="ps-3">Manage Account</span>
        </section>

        <section className="mt-3 copyRight text-md-start text-center">
          <p>Copyright @2016 DEMO Streaming All Rights Reserved. </p>
        </section>

        <section className="d-flex flex-column flex-md-row justify-content-md-between align-items-md-center">
          <section className="text-white">
            <i className="socialMediaIcon fa-brands fa-facebook-f"></i>
            <i className="socialMediaIcon fa-brands fa-twitter"></i>
            <i className="socialMediaIcon fa-brands fa-instagram-square"></i>
          </section>

          <section className="app store">
            <img
              src={
                "https://raw.githubusercontent.com/Jerrysuper123/Movie-Title-Listing/main/movie-titles/src/Images/appStore.png"
              }
              alt="appStore"
              className="appStoreImg"
            />
          </section>
        </section>
      </main>
    </footer>
  );
}
