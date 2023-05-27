import React from "react";
import './terminalapp.css';
import { Typewriter } from "react-simple-typewriter";

function TerminalApp({ arrText }) {
	return(
		<section className="terminal">
			<div className="terminal-title">
				<h3>Terminal</h3>
			</div>
			<div className="terminal-content">
				<div className="text">
					<p>Dev Windows Version 1.0</p>
					<p>C:\Users\Dave:</p>
				</div>
				<div className="text green-txt">
					<span id="text">
						<Typewriter 
							words = {arrText}
							loop = {5}
							cursor
							cursorStyle = '|'
							typeSpeed={70}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					</span>
				</div>
			</div>
		</section>
	)
}

export default TerminalApp