import React from "react";
import './navbar.css';
import logo from '../../assets/Logo_hz_nobg.png'

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="logo"></img>
      <ul className="menu">
          <li><a id="anchor01" href={`#home`}>Home</a></li>
          <li><a id="anchor02" href={`#aboutMe`}>About Me</a></li>
          <li><a id="anchor03" href={`#projects`}>Projects</a></li>
          <li><a id="anchor04" href={`#contact`}>Contact</a></li>
      </ul>
    </div>
  )
}

export default Navbar