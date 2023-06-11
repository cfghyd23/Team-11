import { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
const Login = () => {
  //setting initial states
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    getUserData();
  }, []);
  //getting data from user API
  const getUserData = async () => {
    let response = await axios.get("http://localhost:4000/users");
    setUsers(response.data);
    console.log(users);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    debugger;
    users.map((user1) => {
      if (user1.email == email && user1.password == password) {
        setFlag(true);
        setTimeout(() => {
          // console.log("user5551: ", user1);
          localStorage.clear();
          localStorage.setItem("userData", JSON.stringify(user1));
        });
      }
      return user1;
    });

    // return <PostLogin user={user} />;
  };

  return (
    <div className="container-fluid first">
      <div className="login-form">
        <h2>Login Form</h2>
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

          <button type="submit">
            <Link className="navbar-brand" href="#" to="postLogin">
              Login
            </Link>
          </button>
        </form>
      </div>
      {flag && <Navigate to="/postLogin" replace={true} />}
    </div>
  );
};

export default Login;
