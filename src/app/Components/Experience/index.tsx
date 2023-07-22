import React, { FormEvent, useLayoutEffect, useState } from "react";
import ExperienceCard from "./ExperienceCard";

import clsx from "clsx";
import Screen from "../Screen";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.to(".class", {
// 	scrollTrigger: {
// 		trigger: ".class",
// 		start: "top center", // first value is for .class, second viewport // pixel or value from top
// 		end: "bottom 100px", // if you want relative from start use "+=300" // use function ()=> "+=" + document.querySelector('.class').offsetWidth
// 		scrub: true, // to animate while scrolling //1 to lag animation
// 		pin: true, // to pin //".ghost" or pass dom element
// 		markers: true,
// 		// first is after entering view port, second after leaving, thrid after comming back from bottom
// 		toggleActions: "play none none none", //play pause resume revert restart reset complete none
// 	},
// 	x: 400,
// 	rotation: 360,
// 	duration: 3,
// });

const experiences = [
	{
		company: "Amazon",
		role: "Front End Engineer",
		date: "05/2022-04/2023",
		description:
			"During my time as an Amazon Inc Front-end Engineer in New York City, I relished the opportunity to collaborate with numerous highly skilled individuals. Working alongside a talented team, I appreciated the enriching experience of sharing ideas and expertise, fostering an inspiring culture. The company's commitment to work-life balance further enhanced my overall work experience. Throughout my journey, I had the chance to learn extensively, expanding my knowledge and honing my skills. The combination of these factors made my tenure truly fulfilling and rewarding.",
		responsibilities: [
			"Developing Web Components",
			"Collaboration with Designers",
			"Back-end Developers",
			"Unit and Integration Testing",
			"Cross-Functional Team Collaboration",
			"Technical Documentation",
		],
		tools: [
			"JavaScript",
			"StencilJS",
			"LitElement",
			"ReactJs",
			"Jest",
			"Karma",
			"Nightwatch",
			"StoryBook",
			"AgGrid",
		],
	},
	{
		company: "Fragrancenet",
		role: "Full Stack Developer",
		date: "01/2020-05/2022",
		description:
			"During my tenure as a Full Stack Software Developer at FragranceNet.com, Deer Park, NY, I cherished the company's culture and the collaboration with talented individuals. Taking ownership of the FragranceNet mobile app project, from its inception to successful production, brought a deep sense of accomplishment. I utilized Perl and Interchange for the e-commerce site and harnessed ReactNative and TypeScript to create an engaging mobile app. Integrating Adyen for various payment methods enhanced user convenience. The rewarding experience of contributing to high-quality solutions and enriching the customer experience made my time at FragranceNet.com truly fulfilling.",
		responsibilities: [
			"FragranceNet E-commerce Site",
			"FragranceNet Mobile App",
			"Payment Methods",
			"Website Accessibility",
			"Full App Development Lifecycle",
		],
		tools: [
			"Perl",
			"Interchange",
			"ReactNative",
			"ReactJs",
			"TypeScript",
			"Adyen",
			"JQuery",
			"MySQL",
			"Trustpilot",
		],
	},
];

// gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
	// useLayoutEffect(() => {
	// 	const ctx = gsap.context((self) => {
	// 		const boxes = self.selector!(".box");
	// 		boxes.forEach((box) => {
	// 			gsap.to(box, {
	// 				x: 150,
	// 				scrollTrigger: {
	// 					trigger: box,
	// 					start: "bottom bottom",
	// 					end: "top 20%",
	// 					scrub: true,
	// 				},
	// 			});
	// 		});
	// 	}, main); // <- Scope!
	// 	return () => ctx.revert(); // <- Cleanup!
	// }, []);
	return (
		<section>
			<Screen id="experience" classNames="p-10">
				<h1 className="text-4xl font-bold">Experience</h1>

				{experiences.map((item, i) => {
					return (
						<div>
							<div
								id={item.company}
								className="items-center rounded-lg border border-gray-200 bg-white p-5 shadow  dark:border-gray-700 dark:bg-gray-800"
							>
								<ExperienceCard {...item} />
							</div>
						</div>
					);
				})}
			</Screen>
		</section>
	);
};

export default Experience;
