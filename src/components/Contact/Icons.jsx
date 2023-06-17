import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./icons.css";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

function Icons() {
  const compRef = useRef(null);

  useEffect(() => {
    const icons = compRef.current.querySelectorAll(
      ".whats-icon, .linkedIn-icon, .gmail-icon"
    );

    gsap.set(icons, { transformOrigin: "center center" });

    Draggable.create(icons, {
      type: "x,y",
      bounds: ".icons-section",
      edgeResistance: 0.65,
      onDrag: function () {
        gsap.to(this.target, {
          x: this.x,
          y: this.y,
          rotation: 0,
          duration: 0.5,
        });
      },
      onThrowUpdate: function () {
        gsap.to(this.target, {
          x: this.x,
          y: this.y,
          rotation: 0,
          duration: 0.5,
        });
      },
      onThrowComplete: function () {
        gsap.to(this.target, {
          x: this.x,
          y: this.y,
          rotation: Math.random() * 720 - 360,
          ease: "back.out(1.7)",
          duration: 1,
        });
      },
    });
  }, []);

  const [textDisplay, setTextDisplay] = useState('')
  const data = ['55-2295-7804', 'DaveHdz', 'davehdz.111@gmail.com']

  function changeDisplay(e) {
    if (e.target.id === "whats") {
      console.log(data[0]);
      setTextDisplay(data[0])
    } else if (e.target.id === "linked") {
      console.log(data[1]);
      setTextDisplay(data[1])
    } else if (e.target.id === "gmail") {
      console.log(data[2]);
      setTextDisplay(data[2])
    }
  }
  return (
    <div className="icons-section" ref={compRef}>
      <div id="whats" className="whats-icon" onClick={changeDisplay}></div>
      <div className="display-contact">
        {textDisplay}
      </div>
      <div id="linked" className="linkedIn-icon" onClick={changeDisplay}></div>
      <div id="gmail" className="gmail-icon" onClick={changeDisplay}></div>
    </div>
  );
}

export default Icons;
