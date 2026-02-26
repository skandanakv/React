import {LOGO_URL} from "../utils/constants";
import { useState, useEffect } from "react";

const Header = () => {

  const [BtnName, setBtnName] =useState("Login");

    return (
      <div className="Header">
        <div className="logo-container">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              className="logo"
              src={LOGO_URL}
              style={{ display: "inline-block", marginRight: "10px" }}
              alt="logo"
            />
            <h1 style={{ display: "inline-block", margin: 0 }}>
              Food Web
            </h1>
          </div>
        </div>
  
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button id="login-btn" onClick={()=> {
               BtnName==="Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>{BtnName}</button>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;  