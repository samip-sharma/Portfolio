import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const AnimatedTypingComponent = () => {
	const [shouldShowTypewriter, setShouldShowTypewriter] = useState(true);

	return (
		<div className="mb-5 h-[5%] font-raleway text-2xl">
			{shouldShowTypewriter && (
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString("Hi, welcome!!")
							.deleteAll()
							.typeString("I will be replying in the chat!!")
							.deleteAll()
							.callFunction(() => {
								setShouldShowTypewriter(false);
							})
							.start();
					}}
				/>
			)}
		</div>
	);
};

export default AnimatedTypingComponent;
