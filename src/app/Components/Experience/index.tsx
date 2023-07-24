import React, { MutableRefObject, useLayoutEffect } from "react";
import ExperienceCard from "./ExperienceCard";
import Screen from "../Screen";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navWidth } from "@/app/Constants";

gsap.registerPlugin(ScrollTrigger);

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

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
	const reference = React.useRef<HTMLDivElement>(null);
	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline();
			tl.to("#experience-card-wrapper", {
				scrollTrigger: {
					trigger: "#experience-card-wrapper",
					start: `top ${navWidth}`,
					end: "+=100%",
					pin: true,
					pinSpacing: true,
				},
			});

			tl.to("#Amazon", {
				scrollTrigger: {
					trigger: "#Amazon",
					start: "top 100",
					end: "+=400",
					toggleActions: "play none none reverse",
					scrub: true,
				},
				height: "400",
			});

			tl.to("#Fragrancenet", {
				scrollTrigger: {
					trigger: "#Fragrancenet",
					start: "top",
					end: "+=400",
					toggleActions: "play none none reverse",
					scrub: true,
				},
				height: "400",
			});
		}, reference); // <- Scope!

		return () => ctx.revert(); // <- Cleanup!
	}, []);

	return (
		<>
			<Screen id="experience" classNames="p-10 h-screen mb-10 bg-white">
				<div ref={reference}>
					<div id="experience-card-wrapper">
						<h1 className="text-4xl font-bold">Experience</h1>
						{experiences.map((item, i) => {
							return (
								<div className="mb-5" key={`key-${item.company}`}>
									<div
										id={item.company}
										className="experience-card h-20   items-center  overflow-hidden rounded-lg border border-gray-200 bg-white p-5 shadow  dark:border-gray-700 dark:bg-gray-800"
									>
										<ExperienceCard {...item} />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</Screen>
		</>
	);
};

export default Experience;
