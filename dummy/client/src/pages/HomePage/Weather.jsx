import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Weather = ({ weatherda }) => {
  // console.log(weatherda.current);
  return (
    <div
      style={{ background: "none", height: "85vh" }}
      className="d-flex justify-center align-items-center flex-col"
    >
      <Link to="/">
        <i className="fa-sharp fa-regular fa-circle-xmark fa-beat fa-2xl"></i>
      </Link>
      <section className="vh-100">
        <MDBContainer className="h-90 m-4">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="10" lg="8" xl="6">
              <MDBCard
                className="bg-dark text-white"
                style={{ borderRadius: "40px" }}
              >
                <div className="bg-image" style={{ borderRadius: "35px" }}>
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp"
                    className="card-img"
                    alt="weather"
                  />
                  <img src={weatherda.current.condition.icon} />
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(190, 216, 232, .5)" }}
                  ></div>
                </div>
                <div className="card-img-overlay text-dark p-5">
                  <MDBTypography tag="h4" className="mb-0">
                    {weatherda.location.name},{weatherda.location.region}
                  </MDBTypography>
                  <p className="display-2 my-3">{weatherda.current.temp_c}°C</p>
                  <p className="mb-2">
                    Feels Like:{" "}
                    <strong>{weatherda.current.feelslike_c}°C</strong>
                  </p>
                  <MDBTypography tag="h5">
                    {weatherda.current.condition.text}
                  </MDBTypography>
                </div>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
};

export default Weather;
