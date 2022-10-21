import React, { Fragment, useEffect, useState } from "react";
import "./Navbar.css";
// import logo from "../src/assets/logo.png";
import image from "../src/assets/image.png";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      //   window.removeEventListener("scroll");
    };
  }, []);

  return (
    <Fragment>
      <div className={`nav ${show && "nav__black"}`}>
        {/* <img className="nav_logo" src={logo} alt="Netflix Logo" /> */}
        <p className="nav_top">NETFLIX</p>
        <img className="nav_avator" src={image} alt="Netflix Logo" />
      </div>
    </Fragment>
  );
}

export default Navbar;
