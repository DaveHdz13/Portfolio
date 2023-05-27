import React from "react";
import './aboutMe.css';
import imgTest from '../../assets/blenderInfografia.png'
import { Typewriter } from "react-simple-typewriter";


function AboutMe() {
  return(
    <section className="about-section">
      <div className="content">
        <div className="description">
          <div className="description-txt">
            <h1>I'm a
              <span id="job">
                <Typewriter 
                  words = {[" Software Developer", " FrontEnd Developer", " Systems Engineer", " Software Developer"]}
                  loop = {3}
                  cursor
                  cursorStyle = '|'
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p>Dedicated to the technology since university choosing the programmers path as a software developer with a lot to learn. Also having fun playing video games, playing guitar and doing excersise.</p>
          </div>
        </div>
        <div className="slider-cont">
          <div className="slider">
            <div className="slider-title">
              <h3>Real Me!</h3>
            </div>
            <img src={imgTest} alt="slide-img" />
          </div>
        </div>
      </div>
      <div className="shape-bottom"></div>
    </section>
  )
}

export default AboutMe