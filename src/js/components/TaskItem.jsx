import React from 'react';
import style from '../../css/style.css';

export default class TaskItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClick() {
		const { task, index: taskIndex, updateTask } = this.props;
		task.done = !task.done;
		updateTask(taskIndex, task);
	}

	handleClose(event) {
		const { index: taskIndex, removeTask } = this.props;
		removeTask(taskIndex);
		event.stopPropagation();
	}

	render() {
		const { task } = this.props;
		return (
			<li className={(task.done ? style.checked : '')} onClick={this.handleClick}>
				<span>{task.title}</span>
				<span className={style.close} onClick={this.handleClose}>×</span>
			</li>
		);
	}
}
