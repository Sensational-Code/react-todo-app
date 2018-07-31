import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList(props) {
	const { tasks, updateTask, removeTask } = props;
	return (
		<ul>
			{tasks.map((task, index) => <TaskItem key={index} index={index} task={task} updateTask={updateTask} removeTask={removeTask} />)}
		</ul>
	);
}
