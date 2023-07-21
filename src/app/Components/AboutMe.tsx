"use client";
import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Landing from "./Landing";
import Bio from "./Bio";

const AboutMe: React.FC = () => {
	return (
		<div id="aboutme" className="box-border w-screen">
			{/* <div className="-mt-20 h-20 "></div> */}
			<Controller>
				<Scene
					triggerHook="onLeave"
					duration="100%"
					pin={{ pushFollowers: false }}
				>
					<Timeline
						wrapper={<div className="h-screen w-screen overflow-hidden" />}
					>
						<section className="absolute h-screen w-screen text-center">
							<Landing />
						</section>
						<Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
							<section className="dark:bg[rgb(35,42,65)] absolute  h-screen w-screen overflow-hidden bg-[rgb(68,112,224)] text-center dark:text-white">
								<Bio />
							</section>
						</Tween>
					</Timeline>
				</Scene>
			</Controller>
		</div>
	);
};

export default AboutMe;
