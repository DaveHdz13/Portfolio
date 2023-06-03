import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import './icons.css'

function Icons() {
  const compRef = useRef(null);

  useEffect(() => {
    const icons = compRef.current.querySelectorAll(".whats-icon, .linkedIn-icon, .gmail-icon");
    gsap.set(icons, { transformOrigin: "center center" });
    gsap.from(icons, { rotation: 360, duration: 1, ease: "power3.out", stagger: 0.2 });
  }, []);

  return (
    <div className="icons-section" ref={compRef}>
      <div className="whats-icon"></div>
      <div className="display-contact">Texto</div>
      <div className="linkedIn-icon"></div>
      <div className="gmail-icon"></div>
    </div>
  );
}

export default Icons;
