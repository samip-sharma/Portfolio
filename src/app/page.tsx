"use client";

import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import ContactForm from "./Components/ContactForm";
import { default as Experience } from "./Components/Experience";

import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/regular.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";

const App: React.FC = () => {
	const [theme, setTheme] = useState<"light" | "dark">("light");
	return (
		<div className={theme}>
			<NavBar />
			<AboutMe />
			<Experience />
			<ContactForm />
		</div>
	);
};

export default App;
