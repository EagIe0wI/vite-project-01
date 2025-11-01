import { useState } from "react";

const TaskAddForm = ({ addTask }) => {
	const [userInput, setUserInput] = useState("");
	const [deadline, setDeadline] = useState("");
	const [hasDeadline, setHasDeadline] = useState(false);

	const handleInput = (e) => {
		setUserInput(e.target.value);
	};

	const handleData = (e) => {
		setDeadline(e.target.value);
	};

	const handleCheckboxClick = () => {
		setHasDeadline(!hasDeadline);
	};

	const submitForm = (e) => {
		e.preventDefault();
		addTask(userInput, deadline);
		setUserInput("");
		setDeadline("");
		setHasDeadline(false);
	};

	return (
		<form onSubmit={submitForm}>
			<input
				type="text"
				value={userInput}
				placeholder="Enter new Task"
				onChange={handleInput}
			/>
			<input
				type="checkbox"
				id="deadline"
				checked={hasDeadline}
				onClick={handleCheckboxClick}
			/>
			<label htmlFor="deadline">add deadline </label>
			{hasDeadline && <input type="date" value={deadline} onChange={handleData} />}
			<input type="submit" value="add" />
		</form>
	);
};

export default TaskAddForm;
