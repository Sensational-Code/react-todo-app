import React from 'react';
import List from './TaskList';
import ListItem from './TaskItem';
import Header from './Header';

import style from '../../css/style.css';

/*
App Structure
	TodoApp
  	- Header
      - Form
  	- TaskList
      - TaskItem #1
      - TaskItem #2
      ...
*/

export default class TodoApp extends React.Component {
	constructor(props) {
	 super(props);
    let exampleTasks = [
      {title: 'Walk the dog', done: false},
      {title: 'Organize desk', done: false},
      {title: 'Go for a jog', done: false},
      {title: 'Make a git commit', done: false}
    ];

		this.state = {
      tasks: exampleTasks.slice(0)
		};

		this.addTask = this.addTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
		this.removeTask = this.removeTask.bind(this);
	}

	addTask(task) {
		let {tasks} = this.state;
		this.setState({
			tasks: [...tasks, task]
		});
	}

  updateTask(index, task) {
    let {tasks} = this.state;
    tasks[index].done = task.done;
    this.setState({tasks});
  }

	removeTask(index) {
		let {tasks} = this.state;
		tasks.splice(index, 1);
		this.setState({tasks});
	}

	render() {
		return (
			<div className={style.container}>
				<Header addTask={this.addTask}></Header>
				<List tasks={this.state.tasks} updateTask={this.updateTask} removeTask={this.removeTask}/>
			</div>
		);
	}
}
