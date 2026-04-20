import { useState, useEffect } from "react";
import { v4 as uuid4 } from "uuid";
import TasksList from "./TasksList.jsx";
import TaskAddForm from "./TaskAddForm.jsx";

const TasksMeneger = () => {
	const [tasks, setTasks] = useState([]);
	const [loading, setLoading] = useState(true);
	// const [tags, setTags] = useState([]);

	//работа с tasks

	const addTask = (text, deadline) => {
		const newTask = {
			id: uuid4(),
			status: "active",
			text,
			deadline,
			tags: [],
		};
		setTasks([newTask, ...tasks]);
	};

	const removeTask = (id) => () => {
		setTasks(tasks.filter((task) => id !== task.id));
	};

	const changeTask = (id) => (text, deadline) => {
		let changed = false;
		const newTasks = tasks.map((task) => {
			const newTask = { ...task };
			if (id == task.id) {
				changed = true;
				newTask.text = text;
				newTask.deadline = deadline;
			}
			return newTask;
		});
		if (changed) setTasks(newTasks);
	};

	//работа с Tags

	// const addTag = (text) => {
	// 	const newTag = {
	// 		id: 1,
	// 		text,
	// 	};
	// 	setTags([newTag, ...tags]);
	// };

	// const setTagToTask = (tag, currId) => {
	// 	setTag(tag, ...tasks.currId.tags);
	// };

	// const removeTag = (id) => {
	// 	setTags(tags.filter((tag) => id !== tag.id));
	// };

	useEffect(() => {
		if (!loading) {
			localStorage.setItem("tasks", JSON.stringify(tasks));
			console.log("saved", tasks);
		}
	}, [tasks]);

	useEffect(() => {
		const data = localStorage.getItem("tasks");
		console.log(data, typeof data);
		if (data == "undefined") return;
		setTasks(JSON.parse(data));
		setLoading(false);
	}, []);

	return (
		<div>
			<TaskAddForm addTask={addTask}></TaskAddForm>
			<TasksList list={tasks} removeTask={removeTask} changeTask={changeTask}></TasksList>
		</div>
	);
};

export default TasksMeneger;

// npm run dev
