import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ThemeSwitcher = () => {
	const { themes, setNewTheme, theme } = useContext(ThemeContext);
	return (
		<div>
			{themes.map((curTheme) => (
				<button
					key={curTheme.className}
					id={curTheme.className}
					type="radio"
					value={curTheme.className}
					checked={curTheme.className === theme.className}
					onClick={() => setNewTheme(curTheme)}
				>
					{curTheme.className}
				</button>
			))}
		</div>
	);
};

export default ThemeSwitcher;
