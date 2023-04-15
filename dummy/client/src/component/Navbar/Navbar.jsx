import React, { useContext, useState } from "react";
import "../Navbar/navbar.css";
import { Link, useLocation } from "react-router-dom";
import Weather from "../../pages/HomePage/Weather";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { Context } from "../..";
import axios from "axios";
import useGeoLocation from "../../pages/Hooks/useGeoLocation";

const Navbar = () => {
  const pathClasses = [
    { path: '/', class: 'nav-link link' },
    { path: '/team', class: 'nav-link link' },
    { path: '/savedarticle', class: 'nav-link link' },
  ];

  const geolocation = useGeoLocation();
  const location = useLocation().pathname;
  if(location==='/'){
    pathClasses[0].class+=' current';
  }
  else if(location==='/team'){
    pathClasses[1].class+=' current';
  }
  else if(location==='/savedarticle'){
    pathClasses[2].class+=' current';
  }



  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const logoutHandler = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/logout", {
        withCredentials: true,
      });
      setIsAuthenticated(false);
    } catch (e) {
      console.log(e);
      setIsAuthenticated(true);
    }
  };

  const [weatherda, setWeatherda] = useState([]);
  const [show, setShow] = useState(false);
  const [weather, showWeather] = useState(false);
  // const onClick = () => {
  //   if (weather === false)
  //     showWeather(true)
  //   else
  //     showWeather(false)
  // }

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = async () => {
    setOpen(!open);

    var latitude = geolocation.coordinates.lat;
    var longitude = geolocation.coordinates.lng;
    // console.log(latitude)
    // console.log(longitude)
    console.log("hello i am here");
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=dca87896300d471684a114613231004&q=${latitude},${longitude}&aqi=no`
    );
    const data = await res.json();
    setWeatherda(data);

    // console.log(data);

    showWeather(true);

    // console.log(data.current.temp_c);
  };
  // useEffect(()=>{
  //   console.log(weatherda)
  // },[weatherda])

  return (
    <div class="total">
      <nav class="navbar navbar-expand-lg navbar-light bg-light mainNav">
        <div class="container-fluid navbar">
          <p class="navbar-brand title">Newsify</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div class="navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" className={pathClasses[0].class}>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/team" className={pathClasses[1].class}>
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/savedarticle" className={pathClasses[2].class}>
                  Saved Articles
                </Link>
              </li>
              <li class="nav-item">
                {isAuthenticated ? (
                  <button onClick={logoutHandler} className="nav-link link">
                    Logout
                  </button>
                ) : (
                  <Link to={"/login"} className="nav-link link">
                    Login
                  </Link>
                )}
              </li>
            </ul>
            <form class="d-flex searchBar">
              <input
                class="form-control me-2 search-input abc"
                type="search"
                placeholder="Search your news"
                aria-label="Search"
              />
              <button class="btn btn-outline-success search-btn" type="submit">
                Search
              </button>
              <Button onClick={handleToggle}>
                <i
                  class="fa-solid fa-cloud-moon-rain fa-2xl"   // it's the weather button
                  style={{ color: "#af695c" }}
                ></i>
              </Button>

              <Link to="https://richesh27.github.io/Stock/" target="_">
                <button>
                  <i
                    class="fa-brands fa-bitcoin fa-xl"           //it's the stock market button
                    style={{ color: "#af695c" }}
                  ></i>
                </button>
              </Link>
            </form>
            <Backdrop
              sx={{
                color: "white",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={open}
              onClick={handleClose}
            >
              {weather && <Weather weatherda={weatherda} />}
            </Backdrop>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
