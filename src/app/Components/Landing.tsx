"use client";
import React from "react";
import SvgLaptopMan from "./SvgLaptopMan";
import AnimatedTypingComponent from "./AnimatedTypingComponent";
import ChatBot from "./ChatBot";

const Landing: React.FC = () => (
	<div className="relative flex h-screen w-full flex-row justify-center bg-[rgb(231,138,61)] max-sm:flex-col">
		<SvgLaptopMan />
		<div className="tweenBackground flex flex-col items-center justify-center gap-10  dark:bg-black">
			<div className="max-sm:hidden">
				<AnimatedTypingComponent />
			</div>
			<ChatBot />
		</div>
	</div>
);

export default Landing;
