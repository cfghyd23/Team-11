import { useEffect, useState } from "react";

import "./Progress.css";
const Progress = () => {
  const [money, setMoney] = useState(0);
  const [user, setuser] = useState(null);

  useEffect(() => {
    setuser(JSON.parse(sessionStorage.getItem("user")));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The Total Outstanding amount is: ${Number(user.goalMoney)}`)
    user.currentRaised = (+user.currentRaised + +money).toString();
    sessionStorage.setItem("user", JSON.stringify(user));
    setuser(JSON.parse(sessionStorage.getItem("user")));
  };

  return (
    <div>
      <div class="split left">
        <div class="centered">
          <form onSubmit={handleSubmit}>
            <label>
              Enter Amount Completed today:
              <input
                type="number"
                value={money}
                onChange={(e) => setMoney(e.target.value)}
              />
            </label>
            <input type="submit" />
          </form>
        </div>
      </div>
      <div class="split right">
        <div class="centered">
          <h2>Name:{user?user.name:"error"}</h2>
          <p>
            <h2>Amount Pledged :{user ? user.goalMoney : "error"}</h2>.
          </p>
          <p>
            Amount left to donate :{" "}
            {user ? +user.goalMoney - +user.currentRaised : "error"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Progress;
