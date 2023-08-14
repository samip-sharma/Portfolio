"use client";
import Image from "next/image";
import React, { Component, useContext, useEffect } from "react";
import NavItem from "./NavItem";
import clsx from "clsx";
import "../app.css";
import HamBurgerMenu from "./HamBurgerMenu";
import { navHeight } from "../Constants";
import NightDarkSwitch from "./NightDarkSwitch.tsx";

const NavBar: React.FC = () => {
	const scrollToTop = () => {
		//scroll to top
	};

	const handleHamburgerClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleLinksClick = () => {
		const navLinks = document.querySelector(".nav-items");
		navLinks?.classList.toggle("open");
	};

	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	return (
		<nav
			className={`sticky top-0 z-50 h-[${navHeight}] bg-white p-4 shadow-md dark:bg-black dark:shadow-white`}
		>
			<div className="0 flex flex-row items-center justify-between">
				<a
					href="#"
					className="mr-14 whitespace-nowrap font-sacramento text-3xl dark:text-white"
				>
					Samip Sharma
				</a>

				<div
					className={clsx(
						"nav-items flex h-full w-full items-center  justify-start  gap-10 pl-20 max-sm:justify-center",
						isMenuOpen && "nav-items-open open ",
					)}
				>
					{navItems.map((item) => (
						<NavItem key={item.name} {...item} />
					))}
				</div>
				<div className="ml-auto flex flex-row items-center  justify-center gap-5">
					<a
						className="cursor-pointer font-raleway text-sm font-bold dark:text-white"
						href="https://docs.google.com/document/d/1G9Ejx1Dd7Qf0ULz6Lt5PogkM4IRrBuaBCNRswm-s7fc/edit"
						target="_blank"
					>
						Resume
					</a>
					<HamBurgerMenu handleHamburgerClick={handleHamburgerClick} />
					<a
						className="h-[40px] w-[40px] cursor-pointer font-raleway text-sm font-bold dark:text-white"
						href="https://www.linkedin.com/in/samip-sharma/"
						target="_blank"
					>
						<i className="fa-brands  fa-3x fa-linkedin h-20 w-20 text-[rgb(30,48,80)] dark:text-white"></i>
					</a>
					<NightDarkSwitch />
				</div>
			</div>
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
	{ name: "Contact Me", src: "contactme" },
];
