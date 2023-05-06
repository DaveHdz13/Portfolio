import React from "react";
import './navbar.css';
import logo from '../../assets/Logo_hz_nobg.png'

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo"></img>
      <ul className="menu">
          <li><a id="anchor01" href="#">Home</a></li>
          <li><a id="anchor01" href="#">About Me</a></li>
          <li><a id="anchor01" href="#">Projects</a></li>
          <li><a id="anchor01" href="#">Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar