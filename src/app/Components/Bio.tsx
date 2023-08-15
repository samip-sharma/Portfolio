import React from "react";
import Image from "next/image";
import samipPic from "../Assets/image/samip.jpg";

const Bio: React.FC = () => (
	<div className="relative flex h-screen  flex-row justify-between  text-white max-md:flex-col  sm:px-10 sm:py-24">
		<div className="items-centers flex flex-col justify-center p-10 text-center">
			<h1 className="font-rubik text-[35px] font-bold ">SAMIP SHARMA</h1>
			<br />
			<p className="text-[16px]">
				I am a full-stack web developer contributing to this growing tech
				industry by using my hard and soft skills to provide innovation in
				technical solutions and outcomes. One of my greatest passions is
				technology and building new products and tools that people will use and
				love. I completed my bachelor&apos;s degree in civil engineering, which
				helps me think technically, solve problems critically, work with teams,
				and face new challenges every day.
			</p>
		</div>

		<div className="relative h-fit">
			<Image src={samipPic} alt="samip Sharma" />
		</div>
	</div>
);

export default Bio;
