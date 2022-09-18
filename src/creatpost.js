import React from "react";
import "./creatpost.css";
const Post =()=>{
    return(
        <div className="card input-field"
        style={{
            margin:"10px auto",
             width:"500px",
            padding:"20px",
            
    
    }}
        >
 <input type="text"  placeholder="title"/>
<input type="text"  placeholder="body"/>
<div class="file-field input-field">
      <div class="btn">
        <span>UPLOAD IMAGE</span>
        <input type="file"/>
      </div>
      <div class="file-path-wrapper">
        <input class="file-path validate" type="text"/>

      </div>
    </div>
    <button type="submit" className="Submit-button">SUBMIT POST</button>
    </div>
    )
}
export default Post;