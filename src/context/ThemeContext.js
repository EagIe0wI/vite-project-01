import { createContext } from "react";
import "../styles/themesVar.css";

// Создаём контекст и задаем значения по умолчанию для него
export default createContext({
	themes: [],
	theme: {},
	setNewTheme: () => {},
});
