import React from "react";
import './home.css';
//import avatar02 from '../../assets/Avatar02.png';
import TerminalApp from "../TerminalApp/TerminalApp";

// The 'avatar' is going to be a 3D model that interacts when hover :D

function Home() {
  return (
    <section className="home-section">
      <div className="left">
        <TerminalApp />
      </div>
      <div className="right"></div>
    </section>
  )
}

export default Home