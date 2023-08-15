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

	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const handleLinkClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
		const url = new window.URL(e.currentTarget.href);
		document.querySelector(url.hash)?.scrollIntoView({ behavior: "smooth" });
		setIsMenuOpen(false);
	};
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
						isMenuOpen && "nav-items-open open gap-20",
					)}
				>
					{navItems.map((item) => (
						<NavItem key={item.name} {...item} onClick={handleLinkClick} />
					))}
					<div className="mt-70 flex flex-row  items-center justify-center gap-5 sm:hidden">
						<a
							className="cursor-pointer font-raleway text-sm font-bold dark:text-white"
							href="https://docs.google.com/document/d/1G9Ejx1Dd7Qf0ULz6Lt5PogkM4IRrBuaBCNRswm-s7fc/edit"
							target="_blank"
						>
							Resume
						</a>
						<a
							className="h-[40px] w-[40px] cursor-pointer font-raleway text-sm font-bold dark:text-white"
							href="https://www.linkedin.com/in/samip-sharma/"
							target="_blank"
						>
							<i className="fa-brands  fa-3x fa-linkedin h-[20px] w-[20px] text-[rgb(30,48,80)] dark:text-white"></i>
						</a>
					</div>
				</div>
				<div className="ml-auto flex flex-row items-center  justify-center gap-5">
					<div className="flex flex-row items-center  justify-center gap-5 max-sm:hidden">
						<a
							className="cursor-pointer font-raleway text-sm font-bold dark:text-white"
							href="https://docs.google.com/document/d/1G9Ejx1Dd7Qf0ULz6Lt5PogkM4IRrBuaBCNRswm-s7fc/edit"
							target="_blank"
						>
							Resume
						</a>
						<a
							className="h-[40px] w-[40px] cursor-pointer font-raleway text-sm font-bold dark:text-white"
							href="https://www.linkedin.com/in/samip-sharma/"
							target="_blank"
						>
							<i className="fa-brands  fa-3x fa-linkedin h-[20px] w-[20px] text-[rgb(30,48,80)] dark:text-white"></i>
						</a>
					</div>
					<NightDarkSwitch />
					<HamBurgerMenu handleHamburgerClick={handleHamburgerClick} />
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
