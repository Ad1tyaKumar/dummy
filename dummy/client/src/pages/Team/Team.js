import React from "react";
import Navbar from "../../component/Navbar/Navbar";
// import "../HomePage/Styles/navbar.css"
import "./Team.scss";
import Connect from "../../component/Connect/Connect";
import Footer from "../../component/Footer/Footer";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="team">
        <div className="heading">
          <h1>Team bots</h1>
        </div>
        <div className="members">
          <div className="w3-card-4 w3-quarter member">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.TMuOzZP0TBf6PiDDetcWdwHaIE&pid=Api&P=0"
              alt="Alps"
            />
            <div className="w3-container w3-center">
              <h1>Amitesh</h1>
              <p>ML-AI</p>
            </div>
          </div>
          <div className="w3-card-4 w3-quarter member">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.1wn9csFt6sVVyh8MXBKYxgHaEK&pid=Api&P=0"
              alt="Alps"
            />
            <div className="w3-container w3-center">
              <h1>Richesh</h1>
              <p>Front end developer</p>
            </div>
          </div>
          <div className="w3-card-4 w3-quarter member">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.dCi7Bm7UmQNz-lWMdGUd2wHaFi&pid=Api&P=0"
              alt="Alps"
            />
            <div className="w3-container w3-center">
              <h1>Lord</h1>
              <p>Back end developer</p>
            </div>
          </div>
          <div className="w3-card-4 w3-quarter member">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.pPobLRQTuOWznpg86LLvJAHaGL&pid=Api&P=0"
              alt="Alps"
            />
            <div className="w3-container w3-center">
              <h1>Medha</h1>
              <p>Front end developer</p>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback"><Connect/></div>
      
      <Footer/>
      
    </>
  );
}
