import {LOGO_URL} from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import{Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

  const [BtnName, setBtnName] =useState("Login");
  const onlineStatus=useOnlineStatus();

  const loggedInUser = useContext(UserContext);
  console.log(loggedInUser);

      return (
    <div className="flex justify-between items-center px-8 py-4 bg-white shadow-md">

      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          className="w-24 h-20 rounded-full"
          src={LOGO_URL}
          alt="logo"
        />
        <h1 className="text-2xl font-bold text-orange-500">
          Food Web
        </h1>
      </div>

      {/* Navigation */}
      <div>
        <ul className="flex items-center gap-8 text-lg font-medium">

          <li>
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>

          <li className="hover:text-orange-500 transition">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-orange-500 transition">
            <Link to="/about">About Us</Link>
          </li>

          <li className="hover:text-orange-500 transition">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="hover:text-orange-500 transition">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="hover:text-orange-500 transition">
            Cart
          </li>

          <button
            className="bg-orange-500 text-white px-4 py-1 rounded-md hover:bg-orange-600 transition"
            onClick={() => {
              BtnName === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login");
            }}
          >
            {BtnName}
          </button>

          <li className="hover:text-orange-500 transition">
          {loggedInUser?.loggedInUser}
          </li>

        </ul>
      </div>

    </div>
  );
  };
  
  export default Header;  