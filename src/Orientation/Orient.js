import React from "react";
import { Routes, Route,Link } from "react-router-dom";
import "./OrientStyles.css";
import { right } from "@popperjs/core";
export default function Orient() {
  return (
    <div className="container card-deck flex-wrap">
      <div
        className="card"
        style={{ width: "25rem", height: "33rem", marginTop: "40px" }}
      >
        <img
          src="https://media.istockphoto.com/id/1327919661/photo/world-earth-day-concept-green-energy-renewable-and-sustainable-resources-environmental-and.jpg?s=612x612&w=0&k=20&c=6PvLRMFPI65ATEs-XWPJ_UOtkmSKoONOD4h7Lohq850="
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-title">Environmental Sustainability</h3>
          <Link to="Envir">
          <button className="btn btn-primary">Read More</button>
            
          </Link>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "25rem", height: "33rem", marginTop: "40px" }}
      >
        <img
          src="https://life.futuregenerali.in/media/v1vh4v1o/how-does-insurance-help-in-economic-development.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-title">Economic Development</h3>
          <Link to="Eco">
          <button className="btn btn-primary">Read More</button>
            
          </Link>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "25rem", height: "33rem", marginTop: "40px" }}
      >
        <img
          src="https://www.evidencebasedmentoring.org/wp-content/uploads/2020/01/ground-group-growth-hands-461049-1024x720.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-title">
            Social <br />
            Development{" "}
          </h3>
          <Link to="Soc">
          <button className="btn btn-primary">Read More</button>
            
          </Link>
        </div>
      </div>
      <div
        className="card"
        style={{ width: "25rem", height: "33rem", marginTop: "40px" }}
      >
        <img
          src="https://media.istockphoto.com/id/492878594/photo/teamwork.jpg?s=612x612&w=0&k=20&c=zJ1NtL3NdsKeP_aeYkJB8yyf6-i0uD3EjFVvz7IZaJY="
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3 className="card-title">Partnerships for the goal</h3>
          <Link to="OtherS">
          <button className="btn btn-primary">Read More</button>
            
          </Link>
        </div>
      </div>
      {/* <Routes>
        <Route path="/Envir" component={<Envir />} />
        <Route path="/Eco" component={<Eco />} />
        <Route path="/Soc" component={<Soc />} />
        <Route path="/OtherS" component={<OtherS />} />
      </Routes> */}
    </div>
  );
}
