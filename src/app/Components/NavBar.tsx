"use client";

import Image from "next/image";
import React, { Component, useEffect } from "react";

const NavBar: React.FC = () => {
	const scrollToTop = () => {
		//scroll to top
	};

	const handleHamburgerClick = (e: any) => {
		const navLinks = document.querySelector(".nav-items");
		navLinks?.classList.toggle("open");
		const links = document.querySelectorAll(".nav-item");
		links.forEach((link) => {
			link.classList.toggle("fade");
		});
	};

	const handleLinksClick = () => {
		const navLinks = document.querySelector(".nav-items");
		navLinks?.classList.toggle("open");
	};

	return (
		<nav className="top-0 mx-2" id="navbar">
			<div className=" flex  flex-row">
				<div className="nav-logo">
					<a href="#">
						<span>
							<Image
								width={60}
								height={60}
								src="/logo.png"
								alt="logo"
								className="mt-0"
							/>
						</span>
					</a>
				</div>
				<div onClick={handleHamburgerClick}>
					<div className="m-1 h-0.5 w-7 bg-gray-600"></div>
					<div className="m-1 h-0.5 w-7 bg-gray-600"></div>
					<div className="m-1 h-0.5 w-7 bg-gray-600"></div>
				</div>
				<div className="nav-items"></div>
			</div>
		</nav>
	);
};
export default NavBar;
