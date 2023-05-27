import React from "react";
import './home.css';
import TerminalApp from "../TerminalApp/TerminalApp";

// The 'avatar' is going to be a 3D model that interacts when hover :D

function Home() {
  return (
    <section className="home-section">
      <div className="left">
        <TerminalApp 
          arrText={["Hello I'm Dave", "I'm a Software Developer"]}
        />
      </div>
      <div className="right avatar-bg"></div>
    </section>
  )
}

export default Home