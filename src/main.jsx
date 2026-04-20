import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import ThemeProvider from "./components/ThemeProvider";

createRoot(document.getElementById("root")).render(
	<ThemeProvider>
		<App />
	</ThemeProvider>
);
