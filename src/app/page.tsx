"use client";
import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/AboutMe";
import "font-awesome/css/font-awesome.min.css";
import ContactForm from "./Components/ContactForm";

const App: React.FC = () => {
	const [theme, setTheme] = useState<"light" | "">("light");
	return (
		<div className={theme}>
			<NavBar />
			<AboutMe />
			<ContactForm />
		</div>
	);
};

export default App;
