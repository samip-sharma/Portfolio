"use client";
import React from "react";
import SvgLaptopMan from "./svgLaptopMan";
import AnimatedTypingComponent from "./AnimatedTypingComponent";
import ChatBot from "./ChatBot";

const Landing: React.FC = () => (
	<div className="relative flex h-screen flex-1 flex-row justify-between max-sm:flex-col">
		<SvgLaptopMan />
		<div className="tweenBackground flex w-[50%] flex-col items-center justify-center bg-[rgb(231,138,61)] dark:bg-black">
			<AnimatedTypingComponent />
			<ChatBot />
		</div>
	</div>
);

export default Landing;
