import React from "react";
import Typewriter from "typewriter-effect";

const AnimatedTypingComponent = () => {
	return (
		<div className="animated-typing-component">
			<Typewriter
				onInit={(typewriter) => {
					typewriter
						.typeString("Hi, welcome!!")
						.deleteAll()
						.typeString("Ask me anything!!")
						.callFunction(() => {
							console.log("text in place");
						})
						.start();
				}}
			/>
		</div>
	);
};

export default AnimatedTypingComponent;
