import {  useEffect, useState } from 'react';

import './Progress.css';
const Progress = () => {
  const [goalMoney, setGoalMoney] = useState(0);
  // const [user,setUser]= useState(null)

useEffect(()=>{
  user=JSON.parse(localStorage?.getItem('user'))
    console.log("peo",user)
  
});
    let user={};
    user=JSON.parse(localStorage?.getItem('user'))
    console.log("peo",user)


    const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The Total Outstanding amount is: ${Number(user.goalMoney)}`)
    user.currentRaised = (Number(user.currentRaised) + Number(goalMoney)).toString()
    sessionStorage.setItem("user", JSON.stringify(user));
    user=JSON.parse(sessionStorage.getItem('user'))
  }

    
    

  return (
    <div>
      
      <div class="split left">
        <div class="centered">
        <form onSubmit={()=>{}}>
          <label>Enter Amount Completed today:
            <input 
              type="number" 
              value={goalMoney}
              onChange={(e) => setGoalMoney(e.target.value)}
            />
          </label>
          <input type="submit" />
      </form>
        </div>
    </div>
    <div class="split right">
  <div class="centered">
    
    <h2>Name:{user.name}</h2>
    <p><h2>Amount Pledged :{user.goalMoney}</h2>.</p>
    <p>Amount left to donate : {+user.goalMoney- +user.currentRaised}</p>
  </div>
</div>
    </div>
  )  
}

export default Progress;
