import React from "react";
import { useState } from "react";
import "./signup.css";
const Signup =()=>{
  const [email, setEmail] = useState('');
   const [password, setPassword]= useState('');
   const [username, setUsername]= useState('');
   
    return(
     <div> <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-15.png" className="logo" alt="" />
      <div className="main">
      <div className="login-container">
        <h5>sign up</h5>
        <form>
           <h6>Name</h6>
          <input type="text" value={username} onChange={e=> setUsername(e.target.value)}/>
          <h6>E-mail</h6>
          <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
          <h6>password</h6>
          <input type="text" value={password} onChange={e=> setPassword(e.target.value)}/>
          <button type="submit" className="login-button">Signup</button>
          <p>By signing up you agree to the instagram Website terms and conditions. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
       </p>
         
        </form>
      </div>
      </div>
      </div> 
    )
}
export default Signup;