import React from "react";
import { useLayoutEffect, useRef } from "react";
import './terminalapp.css';
import { gsap, SteppedEase } from "gsap";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(SteppedEase, TextPlugin);

function TerminalApp() {
	// Reference to the hole 'terminal' section to keep the scope here
	const terminal = useRef();

	// To do the animaton when the component is mounted
  // {opacity: 1, repeat: -1, ease: SteppedEase.config(37)}
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// Check the cursor to blip and stay at the end of the text
      //gsap.fromTo('.green-txt', {duration: 8, width: "0"}, {width: "auto", ease:  SteppedEase.config(19)});
			gsap.to(".green-txt", {text: {value: "Hello I'm David! :D"}, duration: 3, delay: 1, ease: SteppedEase.config(19)});
			gsap.fromTo('#text', {duration: 2, "border-right-color": "rgba(255,255,255,0.75)"}, {"border-right-color": "rgba(255,255,255,0)", repeat: -1, ease:  SteppedEase.config(19)});
		}, terminal)

		return () => ctx.revert();
	}, [])

	return(
		<section className="terminal" ref={terminal}>
			<div className="terminal-title">
				<h3>Terminal</h3>
			</div>
			<div className="terminal-content">
				<div className="text">
					<p>Dev Windows Version 1.0</p>
					<p>C:\Users\Dave:</p>
				</div>
				<div className="text green-txt">
					<span id="text"></span>
				</div>
			</div>
		</section>
	)
}

export default TerminalApp