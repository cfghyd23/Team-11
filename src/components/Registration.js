import React, { useState } from "react";
import "./Registration.css";
import axios from "axios";
import Login from "./Login";
import { Routes, Route, Link } from "react-router-dom";
const Registration = () => {
  // State variables for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [cause, setCause] = useState("");
  const [goalMoney, setGoalMoney] = useState("");
  const [currentRaised, setCurrentRaised] = useState("");

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form submission logic here
    let Obj = {
      email,
      password,
      name,
      gender,
      cause,
      goalMoney,
      currentRaised,
      duration: 10,
    };
    console.log(Obj);
    let response = await axios.post("http://localhost:4000/users", Obj);
    console.log(response);

    if (response.status === 201) {
      alert("Registration successfull");
    }
  };

  return (
    <div>
      <div className="registration-form">
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <div className="flex flex-wrap" >
          <label>Gender:</label>
          <br />
          <div>
          <label htmlFor="male" className="form-check-label">
            <input
            className="float-right"
              type="radio"
              id="male"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>
          </div>
          <div>
          <label htmlFor="female" className="form-check-label">
            <input
            
              type="radio"
              id="female"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
          </div>

            <div>
          <label htmlFor="other" className="form-check-label">
            <input
            // className="form-check-input"
              type="radio"
              id="other"
              value="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
            Other
          </label>
          </div>
          </div>

          <label htmlFor="cause">Cause:</label>
          <input
            type="text"
            id="cause"
            value={cause}
            onChange={(e) => setCause(e.target.value)}
          />

          <label htmlFor="goalMoney">Goal Money:</label>
          <input
            type="text"
            id="goalMoney"
            value={goalMoney}
            onChange={(e) => setGoalMoney(e.target.value)}
          />

          <button type="submit">
            {/* <Link className="navbar-brand" href="#" to="login"> */}
            Register
            {/* </Link> */}
          </button>
        </form>
      </div>
      {/* <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes> */}
    </div>
  );
};

export default Registration;
