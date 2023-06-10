import { useState, useEffect } from "react";
import axios from "axios";
import PostLogin from "./PostLogin";
const Login = () => {
  //setting initial states
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    getUserData();
  }, []);
  //getting data from user API
  const getUserData = async () => {
    let response = await axios.get("http://localhost:4000/users");
    setUsers(response.data);
    console.log(users);
  };

  const handleSubmit = async (e) => {
    users.map((user1) => {
      if (user1.email == email || user1.password == password) {
        console.log(user1);
        setUser(user1);
      }
    });
  };

  return (
    <div className="container-fluid first text-white">
      {user == "" && (
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

            <button type="submit">Login</button>
          </form>
        </div>
      )}
      {user !== "" && <PostLogin user={user} />}
    </div>
  );
};

export default Login;
