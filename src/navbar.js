import React from "react";
import "./navbar.css"
import { NavLink } from "react-router-dom";
const Navbar =()=>{
    return(
        <div className="nav-bar">
    <h5>Instagram</h5>
    <div id="nav-mobile" className="right">
     <NavLink to = "/signup" style={{textDecoration: "none"}}><span>Sign up </span></NavLink> 
     <NavLink to = "/" style={{textDecoration: "none"}}><span>Login in</span></NavLink> 
     <NavLink to = "/post" style={{textDecoration: "none"}}><span> Creat post</span></NavLink>
      <NavLink to = "/profile" style={{textDecoration: "none"}}><span>Profile</span></NavLink>
      
    </div>
  </div>
        
    )
}
export default Navbar;