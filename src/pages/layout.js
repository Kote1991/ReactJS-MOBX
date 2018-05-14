import React, { Component } from 'react';
import { observer } from "mobx-react"

@observer
class App extends Component {
	constructor() {
		super();
		this.state = {
			newTodoVal: '',
			filterOpt: ['ALL', 'COMPLETED', 'INCOMPLETE', 'INPROGRESS']
		}
	}
	newTodo() {
		// if(this.state.newTodoVal != '')
		// {
		var temp = this.state.newTodoVal;
		this.props.store.addNewTodo(temp);
		// }

	}
	toggleCheck(todo) {// current element values are passed
		todo.complete = !todo.complete;
	}
	getFilterValues(FILTER_NAME) {
		switch (FILTER_NAME) {
			case 'ALL':
				return this.todos;
				break;
			case 'COMPLETED':

				return this.todos.filter(
					(todo) => {
						return todo.complete == true;
					}
				)
				break;
			case 'INCOMPLETE':

				return this.todos.filter(
					(todo) => {
						return todo.complete != true;
					}
				)
				break;




		}

	}
	render() {
		const { todos, filter, todosCount, completedTodosCount } = this.props.store
		const todoList = todos.map(todo => (
			<li key={todo.id}>
				<label>
					<input type="checkbox" checked={todo.complete} value={todo.complete}
						onChange={this.toggleCheck.bind(this, todo)} />
					{todo.name}
				</label>
			</li>
		))
		return (
			<div>
				<h6> MOBX</h6>
				<pre>
					Total todos <small>{todosCount}</small>,
			<br />
					completeed <small>{completedTodosCount}</small>
				</pre>
				Selected values {this.state.selected}<br />

				<input type="text" placeholder="Add new TODO"
					defaultValue={this.state.newTodoVal}
					onChange={(event) => this.setState({ newTodoVal: event.target.value })} />
				<select onChange={(e) => this.setState({ 'selected': e.target.value })} >
					{this.state.filterOpt.map((option) => <option

						key={"ko_" + option}> {option} </option>)}
				</select>
				<button onClick={this.newTodo.bind(this)}>Add new TODO</button>
				<ul>
					{todoList}
				</ul>
			</div>

		);
	}
}

export default App;
