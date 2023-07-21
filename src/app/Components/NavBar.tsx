"use client";

import Image from "next/image";
import React, { Component, useContext, useEffect } from "react";
import NavItem from "./NavItem";
import clsx from "clsx";
import "../app.css";

const NavBar: React.FC = () => {
	const handleHamburgerClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<nav className="sticky top-0 z-50 flex items-center bg-white p-4 shadow-md dark:bg-black dark:shadow-white">
			<div className="absolute -top-52 left-0 z-0 h-52 w-screen bg-white" />
			<div className="flex items-center justify-between">
				<a
					href="#"
					className="mr-14 whitespace-nowrap font-sacramento text-3xl"
				>
					Samip Sharma
				</a>
				<div
					className="center z-50 mr-3 flex flex-col justify-center sm:hidden"
					onClick={handleHamburgerClick}
				>
					{[1, 2, 3].map((i) => (
						<div
							key={`line-${i}`}
							className="m-0.5 h-1 w-[1.9rem] bg-gray-600 dark:bg-slate-50"
						/>
					))}
				</div>
				<div
					className={clsx(
						"nav-items flex h-full items-center justify-evenly gap-5",
						isMenuOpen && "nav-items-open open",
					)}
				>
					{navItems.map((item) => (
						<NavItem key={item.name} {...item} />
					))}
				</div>
			</div>
			<a
				className="ml-auto cursor-pointer font-raleway text-sm font-bold dark:text-white"
				href="https://docs.google.com/document/d/1G9Ejx1Dd7Qf0ULz6Lt5PogkM4IRrBuaBCNRswm-s7fc/edit"
				target="_blank"
			>
				Resume
			</a>
		</nav>
	);
};

export default NavBar;

const navItems = [
	{
		name: "About Me",
		src: "aboutme",
	},
	{
		name: "Experience",
		src: "experience",
	},
	{
		name: "Skills",
		src: "skills",
	},
	{ name: "Contact Me", src: "contactme" },
];
