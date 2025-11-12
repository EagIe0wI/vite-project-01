import ThemeContext from "../context/ThemeContext";
import { useEffect, useState } from "react";
const themes = [
	{
		className: "light",
		// foreground: "#000000",
		// background: "#eeeeee",
	},
	{
		className: "dark",
		// foreground: "#ffffff",
		// background: "#222222",
	},
];

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(themes[0]);

	const setNewTheme = (theme) => setTheme(theme);
	useEffect(() => {
		document.body.className = theme.className;
	}, [theme]);
	// Передаем данные и функции в контекст провайдера
	return (
		<ThemeContext.Provider value={{ theme, setNewTheme, themes }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
