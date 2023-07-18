import { createContext } from "react";

export type ThemeContextType = "light" | "dark";

const ThemeContext = createContext<ThemeContextType>("light");
export default ThemeContext;
