import React from 'react';
import style from '../../css/style.css';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			placeholder: 'Read a book...'
		};
		this.setInputValue = this.setInputValue.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	setInputValue(event) {
		this.setState({
			inputValue: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		if (this.state.inputValue === '') {
			var placeholder = 'Write something here';
		} else {
			var placeholder = 'Read a book...';
			this.props.addTask({title: this.state.inputValue, done: false});
		}
		this.setState({
			placeholder,
			inputValue: ''
		});
	}

	render() {
		return (
			<div className={style.header}>
				<h1>React Todo List</h1>
				<form onSubmit={this.handleSubmit}>
					<input placeholder={this.state.placeholder} value={this.state.inputValue} onInput={this.setInputValue} />
					<button type="submit" className={style.addBtn}>Add</button>
				</form>
			</div>
		);
	}
}