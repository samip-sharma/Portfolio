import React from "react";
import MyInfoLinks from "./MyInfoLinks";
import Image from "next/image";
import samipPic from "../Assets/image/samip.jpg";

const Bio: React.FC = () => (
	<div className="relative flex h-screen  flex-row  px-10 py-24  max-md:flex-col">
		<div>
			<h1>SAMIP SHARMA</h1>
			<br />I am a full-stack web developer contributing to this growing tech
			industry by using my hard and soft skills to provide innovation in
			technical solutions and outcomes. One of my greatest passions is
			technology and building new products and tools that people will use and
			love. I completed my bachelor&apos;s degree in civil engineering, which
			helps me think technically, solve problems critically, work with teams,
			and face new challenges every day.
			<MyInfoLinks />
		</div>

		<div className="relative h-fit">
			<Image src={samipPic} alt="samip Sharma" />
		</div>
	</div>
);

export default Bio;
