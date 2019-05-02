import React from 'react';
import style from '../../css/style.css';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			placeholder: 'Read a book...',
		};
		this.setInputValue = this.setInputValue.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	setInputValue(event) {
		this.setState({
			inputValue: event.target.value,
		});
	}

	handleSubmit(event) {
		const { addTask } = this.props;
		const { inputValue } = this.state;
		let placeholder;

		event.preventDefault();
		if (inputValue === '') {
			placeholder = 'Write something here';
		} else {
			placeholder = 'Read a book...';
			addTask({
				title: inputValue,
				done: false,
			});
		}
		this.setState({
			placeholder,
			inputValue: '',
		});
	}

	render() {
		const { placeholder, inputValue } = this.state;
		const { tasksCompleted, tasksTotal } = this.props;

		return (
			<div className={style.header}>
				<h4>
					Today's Tasks
					<span className={style['count-badge']}>{tasksTotal - tasksCompleted}</span>
				</h4>
				<p className={style['tasks-completed']}>{tasksCompleted} of {tasksTotal} tasks completed</p>
				<form onSubmit={this.handleSubmit} className={style['form-container']}>
					<input placeholder={placeholder} value={inputValue} onInput={this.setInputValue} />
					<button type="submit" className={style['add-button']}>+</button>
				</form>
			</div>
		);
	}
}
