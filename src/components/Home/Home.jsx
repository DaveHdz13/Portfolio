import React from "react";
import '../Home/home.css';
import avatar02 from '../../assets/Avatar02.png';

function Home() {
  return (
    <section className="home-section">
      <div className="left">
        <h2>Terminal here!</h2>
      </div>
      <div className="right">
        <img src={avatar02} alt="avatar" />
      </div>
    </section>
  )
}

export default Home