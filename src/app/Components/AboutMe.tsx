"use client";
import React, { useLayoutEffect } from "react";
import Landing from "./Landing";
import Bio from "./Bio";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navHeight } from "../Constants";
gsap.defaults({ ease: "none", duration: 2 });

gsap.registerPlugin(ScrollTrigger);

const AboutMe: React.FC = () => {
	const reference = React.useRef<HTMLDivElement | null>(null);
	useLayoutEffect(() => {
		const ctx = gsap.context((self) => {
			// gsap.fromTo(".bio", {
			// 	scrollTrigger: {
			// 		trigger: "#aboutme",
			// 		start: "top top", // first value is for .class, second viewport // pixel or value from top
			// 		end: "bottom 100px", // if you want relative from start use "+=300" // use function ()=> "+=" + document.querySelector('.class').offsetWidth
			// 		scrub: true, // to animate while scrolling //1 to lag animation
			// 		pin: true, // to pin //".ghost" or pass dom element
			// 		markers: true,
			// 		anticipatePin: 1,
			// 	},
			// 	xPercent: -100,
			// });
			const tl = gsap.timeline();
			tl.to(".bio", { xPercent: 100 });
			ScrollTrigger.create({
				animation: tl,
				trigger: "#aboutme",
				start: "top top",
				end: () => "+=100%",
				scrub: true,
				pin: document.querySelector("#aboutme"),
				// markers: true,
			});
		}, reference); // <- Scope!

		return () => ctx.revert(); // <- Cleanup!
	}, []);

	return (
		<div
			id="aboutme"
			className={`relative -mt-[${navHeight}] box-border  h-screen w-screen`}
			ref={reference}
		>
			<section className="landing absolute w-screen text-center">
				<Landing />
			</section>
			<section className="bio absolute -left-full top-0 w-screen overflow-hidden bg-[rgb(104,104,246)] dark:bg-[rgb(27,29,33)]  dark:text-white">
				<Bio />
			</section>
		</div>
	);
};

export default AboutMe;
