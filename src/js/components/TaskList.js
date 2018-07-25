import React from 'react';
import TaskItem from './TaskItem'

import style from '../../css/style.css';

export default class TaskList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul>
				{this.props.tasks.map(
					(task, index) => {
						return <TaskItem key={index} index={index} task={task} updateTask={this.props.updateTask} removeTask={this.props.removeTask}></TaskItem>
					}
				)}
			</ul>
		);
	}
}