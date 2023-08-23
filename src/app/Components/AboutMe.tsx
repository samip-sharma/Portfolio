"use client";
import React, { useLayoutEffect } from "react";
import Landing from "./Landing";
import Bio from "./Bio";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navHeight } from "../Constants";
gsap.defaults({});

// gsap.registerPlugin(ScrollTrigger);

const AboutMe: React.FC = () => {
	const reference = React.useRef<HTMLDivElement | null>(null);
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline();
			tl.to(".bio", { xPercent: 100 });
			ScrollTrigger.create({
				animation: tl,
				trigger: document.querySelector("#aboutme"),
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
			className={`relative -mt-[${navHeight}] box-border h-screen w-screen`}
			ref={reference}
		>
			<section className="landing absolute h-screen w-screen w-screen text-center">
				<Landing />
			</section>
			<section className="bio absolute -left-full top-0 w-screen overflow-hidden bg-[rgb(104,104,246)] dark:bg-[rgb(27,29,33)]  dark:text-white">
				<Bio />
			</section>
		</div>
	);
};

export default AboutMe;
