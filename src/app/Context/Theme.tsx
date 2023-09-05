"use client";
import React, { ReactNode, createContext, useState } from "react";

export interface ThemeContextType {
	theme: "light" | "dark";
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined,
);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState<ThemeContextType["theme"]>("light");

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
