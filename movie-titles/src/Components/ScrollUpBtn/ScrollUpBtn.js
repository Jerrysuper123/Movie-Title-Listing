import { useEffect, useState } from "react";
import "./style.css";

const ScrollUpBtn = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <section
          onClick={scrollToTop}
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="fa-solid fa-angle-up"></i>
        </section>
      )}
    </>
  );
};

export default ScrollUpBtn;
