import React from 'react';
import style from '../../css/style.css';

export default class TaskItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleClick() {
		this.props.task.done = !this.props.task.done;
		this.props.updateTask(this.props.index, this.props.task);
	}

	handleClose(event) {
		this.props.removeTask(this.props.index);
		event.stopPropagation();
	}

	render() {
		return (
			<li className={(this.props.task.done ? style.checked : '')} onClick={this.handleClick}>
				<span>{this.props.task.title}</span>
				<span className={style.close} onClick={this.handleClose}>×</span>
			</li>
		);
	}
}