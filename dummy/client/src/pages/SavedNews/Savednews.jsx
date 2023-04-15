import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import CarouselComponent from "../HomePage/CarouselComponent"
import "../../component/Navbar/navbar.css";
import "../HomePage/Styles/carousel.css";
import "../SavedNews/savednews.css"
import Footer from "../../component/Footer/Footer";

const SavedNews = () => {
  return (
    <div className="saved-news">
      <Navbar />
      <h1 className="saved-text">Saved Article</h1>
      <div>
        <div className="container">
          <CarouselComponent />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SavedNews;
