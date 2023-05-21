import React from "react";
import './aboutMe.css';
import { useLayoutEffect, useRef } from "react";
import { gsap, SteppedEase } from "gsap";
import { TextPlugin } from "gsap/all";
import imgTest from '../../assets/blenderInfografia.png'

gsap.registerPlugin(SteppedEase, TextPlugin);

function AboutMe() {
  // Reference to the hole 'about' section to keep the scope here
  const about = useRef();

  useLayoutEffect(() => {
		const ctx = gsap.context(() => {
      gsap.to("#job", {text: {value: "Software Developer"}, duration: 3, delay: 1, ease: SteppedEase.config(19), repeat: 2});
		}, about)

		return () => ctx.revert();
	}, [])

  return(
    <section className="about-section" ref={about}>
      <div className="content">
        <div className="description">
          <h1>I'm a <span id="job"></span></h1>
          <p>Dedicated to the technology since university choosing the programmers path as a software developer with a lot to learn. Also having fun playing video games, playing guitar and doing excersise.</p>
        </div>
        <div className="slider-cont">
          <div className="slider">
            <div className="slider-title">
              <h3>Real Me!</h3>
            </div>
            <img src={imgTest} alt="slide-img" />
          </div>
          <div className="shape-bottom"></div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe