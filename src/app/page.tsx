"use client";
import React from "react";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import ContactForm from "./Components/ContactForm";
import { default as Experience } from "./Components/Experience";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/regular.min.css";
import "@fortawesome/fontawesome-free/css/solid.min.css";
import "@fortawesome/fontawesome-free/css/brands.min.css";
import { useTheme } from "./Hooks/useTheme";
import { ThemeProvider } from "./Context/Theme";

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<Pages />
		</ThemeProvider>
	);
};

const Pages: React.FC = () => {
	const { theme } = useTheme();
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
