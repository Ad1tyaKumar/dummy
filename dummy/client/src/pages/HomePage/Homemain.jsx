import React from "react";
import Navbar from "../../component/Navbar/Navbar"
import NavbarSec from "./NavbarSec";
import Weather from "./Weather"

import "../../component/Navbar/navbar.css"
import "./Styles/navbarSec.css"
import "./Styles/carousel.css"
import "./Styles/homemain.css"
import Footer from "../../component/Footer/Footer";

function Homemain() {
  return (
    <>
      <div className="main">
        <Navbar />
        <NavbarSec />
        {/* <Weather/> */}
      </div>
      <Footer/>
    </>
  );
}

export default Homemain;