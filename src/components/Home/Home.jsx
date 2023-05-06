import React from "react";
import './home.css';
import avatar02 from '../../assets/Avatar02.png';
import TerminalApp from "../TerminalApp/TerminalApp";

function Home() {
  return (
    <section className="home-section">
      <div className="left">
        <TerminalApp />
      </div>
      <div className="right">
        <img src={avatar02} alt="avatar" />
      </div>
    </section>
  )
}

export default Home