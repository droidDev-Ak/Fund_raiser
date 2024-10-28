import React from 'react';
import './Navbar.css'

export default function Navbar(){
  return (
    
      <div className="nav">
        <div id="head">FundRaiser</div>
        <div> Home </div>
        <div>Donate</div>
        <div>About Us</div>
        <div>Contact </div>
        <div id="sign">
          <div id="sign">
            <button id="in">Sign In</button>
          </div>
          <div id="/signup">
            <button id="up">Sign Up</button>
            </div>
        </div>
      </div>

  );
};

