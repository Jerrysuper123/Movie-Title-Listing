import React from "react";
import "./style.css";
import AppStore from "../../Images/appStore.png";

export default function Footer() {
  return (
    <footer className="page-footer font-small blue p-4 text-center">
      <main className="ms-5 me-5">
        <section className="footerHeader d-flex flex-column ">
          <span>Home | </span>
          <span>Terms and Conditions | </span>
          <span>Privacy Policy | </span>
          <span>Collection Statement | </span>
          <span>Help | </span>
          <span>Manage Account</span>
        </section>

        <section className="mt-3 copyRight">
          <p>Copyright @2016 DEMO Streaming All Rights Reserved. </p>
        </section>

        <section className="text-white">
          <i className="socialMediaIcon fa-brands fa-facebook-f"></i>
          <i className="socialMediaIcon fa-brands fa-twitter"></i>
          <i className="socialMediaIcon fa-brands fa-instagram-square"></i>
        </section>

        <section className="app store">
          <img src={AppStore} alt="appStore" className="appStoreImg" />
        </section>
      </main>
    </footer>
  );
}
