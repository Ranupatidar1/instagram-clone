import React from "react";
import { useState } from "react";
import "./home.css";
import { NavLink } from "react-router-dom";
const Home =()=>{
  const [email, setEmail] = useState('');
   const [password, setPassword]= useState('');
   
    return(
     <div >

      <div className="main">
      <img src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo-15.png" className="logo" alt="" />
        <div className="login-container">
        <h5>sign in</h5>
        <form>
          <h6>E-mail</h6>
          <input type="text" value={email} onChange={e=> setEmail(e.target.value)}/>
          <h6>password</h6>
          <input type="text" value={password} onChange={e=> setPassword(e.target.value)}/>
          <button type="submit" className="login-button">signin</button>
          <p>By signing in you agree to the instagram Website terms and Conditions. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
       </p>
        <NavLink  to = "/signup" style={{textDecoration: "none"}}><button className="login-signupButton">Create your intagram account</button>  </NavLink> 
        </form>
      </div>
      </div>
      </div> 
    )
}
export default Home;