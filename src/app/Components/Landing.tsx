"use client";
import React from "react";
import SvgLaptopMan from "./SvgLaptopMan";
import AnimatedTypingComponent from "./AnimatedTypingComponent";
import ChatBot from "./ChatBot";

const Landing: React.FC = () => (
	<div className="relative flex h-screen basis-6/12 flex-row justify-center bg-[rgb(231,138,61)] max-sm:flex-col">
		<SvgLaptopMan />
		<div className="tweenBackground flex basis-6/12 flex-col items-center  gap-10 dark:bg-black">
			<div className="shrink max-sm:hidden  sm:mt-20 sm:h-20">
				<AnimatedTypingComponent />
			</div>
			<ChatBot />
		</div>
	</div>
);

export default Landing;
