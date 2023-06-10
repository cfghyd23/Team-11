import { useState, useEffect } from "react";
import axios from "axios";
const Progress = () => {
  
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    getUserData();
  }, []);


  const getUserData = async ()=>{

   

    let current = await axios.get("http://localhost:4000/users");
    setUsers(current);
    console.log(users);
  }
    
  
  return(
<>

</>
  ) 
   
   


 
};


export default Progress;
