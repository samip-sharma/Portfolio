"use client";
import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import MyInfoLinks from "./MyInfoLinks";
import SvgLaptopMan from "./svgLaptopMan";
import Image from "next/image";
import samipPic from "../Assets/image/samip.jpg";
import AnimatedTypingComponent from "./AnimatedTypingComponent";
import ChatBot from "./ChatBot";

const AboutMe: React.FC = () => (
	<div id="aboutme">
		<Controller>
			<Scene triggerHook="onLeave" duration="100%" pin>
				<Timeline
					wrapper={<div className="h-screen w-screen overflow-hidden" />}
				>
					<section className="absolute h-screen w-screen text-center">
						<div className="relative flex h-screen flex-1 flex-row justify-between max-sm:flex-col">
							<SvgLaptopMan />
							<div className="tweenBackground flex w-[50%] flex-col items-center justify-center bg-[rgb(231,138,61)] dark:bg-black">
								<AnimatedTypingComponent />
								<ChatBot />
							</div>
						</div>
					</section>
					<Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
						<section className="absolute  h-screen w-screen overflow-hidden bg-[rgb(68,112,224)] text-center">
							<div className="relative flex h-screen  flex-row  px-10 py-24  max-md:flex-col">
								<div className="">
									<h1>SAMIP SHARMA</h1>
									<br />I am a full-stack web developer contributing to this
									growing tech industry by using my hard and soft skills to
									provide innovation in technical solutions and outcomes. One of
									my greatest passions is technology and building new products
									and tools that people will use and love. I completed my
									bachelor&apos;s degree in civil engineering, which helps me
									think technically, solve problems critically, work with teams,
									and face new challenges every day.
									<MyInfoLinks />
								</div>

								<div className="relative h-fit">
									<Image src={samipPic} alt="samip Sharma" />
								</div>
							</div>
						</section>
					</Tween>
				</Timeline>
			</Scene>
		</Controller>
	</div>
);

export default AboutMe;
