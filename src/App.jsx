import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/App.css";
import TasksMeneger from "./components/TasksMeneger";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<ThemeSwitcher></ThemeSwitcher>
			<TasksMeneger></TasksMeneger>
		</>
	);
}

export default App;
