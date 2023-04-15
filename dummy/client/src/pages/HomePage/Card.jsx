import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../component/Footer/Footer";

const Card = (props) => {
  const [data, Setdata] = useState(props);
  const [saved, setSaved] = useState(false);
  const handleClick = () => {
    if (!saved) {
      setSaved(true);
    } else {
      setSaved(false);
    }
  };

  const str = props.summary;

  useEffect(() => {
    console.log(props);
  }, [props]);

  // console.log(props)
  return (
    <>
      <div
        class="card carousel-card carousel-card"
        style={{ width: "90%", height: "30rem" }}
      >
        <img
          src="https://assets.thehansindia.com/h-upload/2022/04/30/1289736-politics.webp"
          class="card-img-top card-image"
          alt="..."
        />
        <div class="card-body">
          <div className="d-flex justify-space-between align-items-left flex-row">
            <div>
              <h5 class="card-title carousel-title">{props.headline}</h5>
            </div>
            <div>
              <button onClick={handleClick}>
                <i
                  className={`fa-${
                    saved ? "solid" : "regular"
                  } fa-bookmark fa-xl ml-2`}
                  style={{ color: " #af695c" }}
                ></i>
              </button>
            </div>
          </div>
          <p class="card-text">{str.slice(0, 240)}...</p>

          <Link to="/detail">
            <button type="button" class="btn btn-primary card-btn">
              Read More
              <img src="circle-notch.png" className="notch" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
