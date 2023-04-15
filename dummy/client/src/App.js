import React, { useContext, useEffect } from "react";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/SignUp/Signup";
import Detail from "./pages/Detail/Detail";
import Error from "./pages/Error/Error";
import Team from "./pages/Team/Team";
import Homemain from "./pages/HomePage/Homemain";
import SavedNews from "./pages/SavedNews/Savednews";
import Search from "./pages/Search/Search";
import { Context } from ".";
import axios from "axios";
import backEndUrl from "./host";
function App() {
  const {setUser,setIsAuthenticated}=useContext(Context);
  useEffect(()=>{
    axios.get(`${backEndUrl}/users`,{
      withCredentials:true,
    }).then(res=>{
      setUser(res.data.user);
      if(res.data.success===true){
        setIsAuthenticated(true);
      }
      else{
        setUser({})
        setIsAuthenticated(false);
      }
    }).catch((e)=>{
      console.log(e);
      setIsAuthenticated(false);
    })
  })
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homemain/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/team" element={<Team />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/savednews" element={<SavedNews/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
