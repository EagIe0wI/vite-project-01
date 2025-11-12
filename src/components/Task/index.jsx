import { useState } from "react";
import styles from "./style.module.css";

const Task = ({ text, deadline, removeTask, changeTask }) => {
	const [textFieldInput, setTextFieldInput] = useState("");
	const [deadlineInput, setNewDeadline] = useState("");
	const [editing, setEditingStatus] = useState(false);
	const [hasDeadline, setHasDeadline] = useState(deadline.length > 0);
	const [isComlited, setStatusComplited] = useState(false);
	const [isExpired, setStatusExpired] = useState(false);
	const [hasErrors, setErrors] = useState({
		input: false,
		date: false,
	});

	const handleClickEditing = () => {
		setEditingStatus(!editing);
		setTextFieldInput(text);
		setNewDeadline(date);
	};

	const handleClickSaving = () => {
		if (!validateErrors()) return;
		setStatusComplited(!isComlited);
		setEditingStatus(!editing);
		changeTask(textFieldInput, deadlineInput);
	};

	const handleClickComplited = () => {
		setStatusComplited(!isComlited);
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

	const handleDeadline = (deadline) => {
		const dateDeadline = new Date(deadline);
		console.log(dateDeadline, dateDeadline - Date.now);
		if (dateDeadline.length == 0) return;
		if (dateDeadline - Date.now < 0) setStatusExpired(!isExpired);
	};

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
			<li className={isComlited ? styles.done : isExpired ? styles.expired : styles.active}>
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
							checked={hasDeadline}
							onChange={handleCheckbox}
						/>
						{hasDeadline ? (
							<input
								type="date"
								onChange={handleDateInput}
								value={deadline}
								className={hasErrors.input ? "error" : ""}
							/>
						) : (
							<label htmlFor="deadline">add deadline </label>
						)}
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
				<>
					<button onClick={handleClickComplited}>Done!</button>
					<button onClick={handleClickEditing}>change</button>
					<button onClick={removeTask}>delete</button>
				</>
			)}
		</div>
	);
};

export default Task;
