import React, { FormEvent, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import clsx from "clsx";

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

const Experience = () => {
	return (
		<section id="experience" className="h-screen overflow-hidden p-10">
			<Controller>
				{/* triggerHook: is when the animatin triggers 0-1 | ‘onLeave’, ‘onEnter’ or ‘onCenter */}
				{/* opffset prop can be set to further define exactly when your scroll animation will begin */}
				{/* Duration will define how long the animation occurs it can be on pixel as well eg. 400 */}
				<Scene>
					<h1 className="text-4xl font-bold">Experience</h1>
				</Scene>
				{experiences.map((item, i) => {
					return (
						<div>
							<Scene
								triggerElement={`#${item.company}`}
								indicators={true}
								// triggerHook="0.2"
								// offset={(i + 1) * 90}
								duration="200"
								// pin={true}
							>
								{(progress: number) => (
									<Timeline
										wrapper={<div className="my-10 overflow-hidden" />}
										paused
									>
										<Tween
											from={{ height: 90 }}
											to={{ height: 400 }}
											totalProgress={progress}
										>
											<div
												id={item.company}
												className="items-center rounded-lg border border-gray-200 bg-white p-5 shadow  dark:border-gray-700 dark:bg-gray-800"
											>
												<ExperienceCard {...item} />
											</div>
										</Tween>
										<Tween from={{ height: 500 }} to={{ height: 90 }} />
									</Timeline>
								)}
							</Scene>
						</div>
					);
				})}
			</Controller>
		</section>
	);
};

export default Experience;
