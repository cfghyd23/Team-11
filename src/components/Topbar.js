import React from "react";
import "./Topbar.css";
import { Router, Routes, Route, Link } from "react-router-dom";
import MarpuFound from "./MarpuFound";
import Registration from "./Registration";
import Login from "./Login";
import Certificate from "./Certificate";
import Progress from "./Progress";
import Orientations from "./Orientations";
import PostLogin from "./PostLogin";
import Envir from "../Routes/Envir";
import Eco from "../Routes/Eco";
import Soc from "../Routes/Soc";
import OtherS from "../Routes/OtherS";
const Topbar = () => {
  const handleClick = () => {
    console.log("calling logout");
    localStorage.clear();
    alert("Logged out");
  };
  return (
    <div>
      <div className="App">
        <nav className="navbar navbar-dark navbar-expand-lg border-bottom fixed-top">
          <div className="container container-fluid-sm container-fluid-md">
            <Link className="navbar-brand marpu h1" href="#" to="">
              Marpu Foundation
            </Link>
            {/* <Link className="navbar-brand" href="#" to="orientation">
              Orientations{" "}
            </Link>
            <Link className="navbar-brand" href="#" to="progress">
              Progress
  </Link>*/}
            <Link className="navbar-brand" href="#" to="certificate">
              Certification
            </Link>
            {/* {
                !sessionStorage.getItem('user') && */}

            <div className="align-left">
              <Link className="navbar-brand" href="#" to="login">
                Login
              </Link>
              <Link className="navbar-brand" href="#" to="register">
                Register
              </Link>
              <button type="button bg-primary" onClick={handleClick}>
                Logout
              </button>
            </div>

            {/* {
                sessionStorage.getItem('user') && 
                <div className="align-left">
              <Button onClick={()=>{}}>Logout</Button>
            </div>  
            } */}
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<MarpuFound />} />
          <Route path="/orientation" element={<Orientations />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register/*" element={<Registration />} />
          <Route path="/postLogin" element={<PostLogin />} />
          <Route path="/login/postLogin" element={<PostLogin />} />
          <Route path="/login/postLogin/Envir" element={<Envir />} />
          <Route path="/login/postLogin/Eco" element={<Eco />} />
          <Route path="/login/postLogin/Soc" element={<Soc />} />
          <Route path="/login/postLogin/OtherS" element={<OtherS />} />
        </Routes>
      </div>
    </div>
  );
};

export default Topbar;
