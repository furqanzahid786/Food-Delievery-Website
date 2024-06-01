import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

export default function Navbar() {

    const[menu,setmenu]=useState("Home")
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>{setmenu("Home")}} className={menu=="Home"?"active":""}>Home</li>
        <li onClick={()=>{setmenu("Menu")}} className={menu=="Menu"?"active":""}>Menu</li>
        <li onClick={()=>{setmenu("Mobile App")}} className={menu=="Mobile App"?"active":""}>Mobile App</li>
        <li onClick={()=>{setmenu("Contact Us")}} className={menu=="Contact Us"?"active":""}>Contact Us</li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className="Search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
}
