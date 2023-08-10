import { useContext } from "react";
import { ThemeContextType, ThemeContext } from "../Context/Theme";

// Step 3: Create a consumer hook
export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	console.log({ context });
	if (!context) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
