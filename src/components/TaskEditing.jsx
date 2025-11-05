import { useState } from "react";
import styles from "./style.module.css";

const Task = ({ text, deadline, changeTask }) => {
	const [textFieldInput, setTextFieldInput] = useState("");
	const [deadlineInput, setNewDeadline] = useState("");
	const [editing, setEditingStatus] = useState(false);
	const [hasDeadline, setHasDeadline] = useState(false);
	const [hasErrors, setErrors] = useState({
		input: false,
		date: false,
	});

	const handleClickEditing = () => {
		setEditingStatus(!editing);
		setTextFieldInput(text);
	};

	const handleClickSaving = () => {
		if (!validateErrors()) return;
		setEditingStatus(!editing);
		changeTask(textFieldInput, deadlineInput);
	};

	const handleClickComplited = () => {
		setStatusComplited(!statusComlited);
	};

	const handleInput = (e) => {
		setTextFieldInput(e.target.value);
	};

	const handleCheckbox = () => {
		setHasDeadline(!hasDeadline);
	};

	const handleDateInput = (e) => {
		setNewDeadline(e.target.value);
	};

	const handleDeadline = () => {};

	const validateErrors = () => {
		const newErrors = {
			input: false,
			date: false,
		};

		if (textFieldInput.length == 0) {
			newErrors.input = true;
		}
		if (hasDeadline && deadlineInput.length == 0) {
			newErrors.date = true;
		}
		setErrors(newErrors);
		return !newErrors.input && !newErrors.date;
	};

	return (
		<div>
			<li className={statusComlited ? styles.done : styles.active}>
				{editing ? (
					<input
						onChange={handleInput}
						value={textFieldInput}
						className={hasErrors.input ? "error" : ""}
					/>
				) : (
					text
				)}
				{editing ? (
					<>
						<input
							type="checkbox"
							id="deadline"
							checked={hasDeadline} // deadline ? true : false
							onChange={handleCheckbox}
						/>
						<input
							type="date"
							onChange={handleDateInput}
							value={deadlineInput}
							className={hasErrors.input ? "error" : ""}
						/>
					</>
				) : (
					deadline && ` end in ${deadline}`
				)}
			</li>

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
