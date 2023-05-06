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
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			// Check the cursor to blip and stay at the end of the text
			gsap.fromTo('#cursor', {autoAlpha: 0, x:-10}, {autoAlpha: 1, duration: 0.5, repeat: -1, ease: SteppedEase.config(1)});
			gsap.to(".green-txt", {text: {value: "Hello I'm David! :D"}, duration: 2, delay: 1, ease: "none"});
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
				<div className="text green-txt anim-typewriter">
					<span id="text"></span>
					<span id="cursor">|</span>
				</div>
			</div>
		</section>
	)
}

export default TerminalApp