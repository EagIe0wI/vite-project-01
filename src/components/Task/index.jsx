import { useState } from "react";
import styles from "./style.module.css";

const Task = ({ text, deadline, removeTask, changeTask }) => {
	const [textFieldInput, setTextFieldInput] = useState("");
	const [deadlineInput, setNewDeadline] = useState("");
	const [editing, setEditingStatus] = useState(false);
	const [statusComlited, setStatusComplited] = useState(false);

	const handleClickEditing = () => {
		setEditingStatus(!editing);
		setTextFieldInput(text);
	};

	const handleClickSaving = () => {
		setEditingStatus(!editing);
		changeTask(textFieldInput, deadlineInput);
	};

	const handleClickComplited = () => {
		setStatusComplited(!statusComlited);
	};

	const handleInput = (e) => {
		setTextFieldInput(e.target.value);
	};

	const handleDateInput = (e) => {
		setNewDeadline(e.target.value);
	};

	const handleDeadline = () => {};

	return (
		<div>
			<li
				onClick={handleClickComplited}
				className={statusComlited ? styles.done : styles.active}
			>
				{editing ? <input onChange={handleInput} value={textFieldInput} /> : text}
				{editing ? (
					<input type="date" onChange={handleDateInput} value={deadlineInput} />
				) : (
					deadline && ` end in ${deadline}`
				)}
			</li>
			<button onClick={removeTask}>delete</button>

			{editing ? (
				<>
					<button onClick={handleClickEditing}>cancel</button>
					<button onClick={handleClickSaving}>save</button>
				</>
			) : (
				<button onClick={handleClickEditing}>change</button>
			)}
		</div>
	);
};

export default Task;
