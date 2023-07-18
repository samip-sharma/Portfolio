"use client";
import Image from "next/image";
import React, { Component, useContext, useEffect } from "react";
import NavItem from "./NavItem";
import clsx from "clsx";
import "../app.css";

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
		<nav className="sticky top-0 z-50 h-20 bg-white p-4 shadow-md dark:bg-black">
			<div className="0 flex flex-row items-center justify-between ">
				<a href="#">
					<Image
						width={50}
						height={50}
						src="/logo.png"
						alt="logo"
						className="mt-0 rounded-full"
					/>
				</a>
				<div
					className="center z-50 mr-3  flex flex-col justify-center sm:hidden"
					onClick={handleHamburgerClick}
				>
					<div className="m-0.5 h-1 w-[1.9rem] bg-gray-600 dark:bg-slate-50" />
					<div className="m-0.5 h-1 w-[1.9rem] bg-gray-600 dark:bg-slate-50" />
					<div className="m-0.5 h-1 w-[1.9rem] bg-gray-600 dark:bg-slate-50" />
				</div>
				<div
					className={clsx(
						"nav-items flex h-full w-full items-center justify-evenly pl-20",
						isMenuOpen && "nav-items-open open",
					)}
					style={{}}
				>
					{navItems.map((item) => (
						<NavItem key={item.name} {...item} />
					))}
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

const navItems = [
	{
		name: "About Me",
		src: "test",
	},
	{
		name: "Projects",
		src: "",
	},
	{
		name: "Skills",
		src: "",
	},
	{ name: "Contact Me", src: "" },
];
