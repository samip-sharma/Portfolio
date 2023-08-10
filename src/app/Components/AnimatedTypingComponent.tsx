import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const AnimatedTypingComponent = () => {
	return (
		<div className="mb-5 h-[5%] font-raleway text-2xl dark:text-white">
			<Typewriter
				onInit={(typewriter) => {
					typewriter
						.typeString("Hi, welcome!!<br /> I will be replying in the chat...")
						.start();
				}}
			/>
		</div>
	);
};

export default AnimatedTypingComponent;
