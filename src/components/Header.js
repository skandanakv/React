import {LOGO_URL} from "../utils/constants";
import { useState, useEffect } from "react";
import{Link} from "react-router-dom";

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
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
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