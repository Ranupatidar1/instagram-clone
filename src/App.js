import React from "react";
import Home from "./home";
import Signup from "./signup";
import Profile from "./profile";
import Post from "./creatpost";
import Navbar from "./navbar"; 
import { Routes, Route } from 'react-router-dom';

const App =()=>{
  return(
    <div>
      <Routes>
      <Route path="/signup" element={<><Navbar/><Signup/></>}></Route>
          <Route path='/' element={<><Navbar/><Home/></>}></Route>
          <Route path='/profile' element={ <><Navbar/><Profile/></>}></Route>
          <Route path='/post' element={<><Navbar/><Post/></>}></Route>
          
      </Routes>
      
      
    </div>
  )
}
export default App;