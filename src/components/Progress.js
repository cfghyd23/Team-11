import { useState } from 'react';

import './Progress.css';
const Progress = () => {
  const [name, setName] = useState("");
  const [goalMoney, setGoalMoney] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The Total Outstanding amount is: ${name}`)
  }

    const user=JSON.parse(sessionStorage.getItem('user'));
    console.log(user)

  return (
    <div>
      
      <div class="split left">
        <div class="centered">
        <form onSubmit={handleSubmit}>
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
    
    <h2>Name:{name}</h2>
    <p><h2>Amount Pledged :{goalMoney}</h2>.</p>
  </div>
</div>
    </div>
  )  
}

export default Progress;
