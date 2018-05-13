import React, { Component } from 'react';
import {observer} from "mobx-react"

@observer
class App extends Component {
	constructor(){
		super();
		this.state={
			newTodoVal:''
		}
	}
	newTodo(){
		if(this.state.newTodoVal != '')
		{
		var temp =this.state.newTodoVal;
		this.props.store.addNewTodo(temp);
		}

	}
	toggleCheck(todo){// current element values are passed
		todo.complete = !todo.complete;
	}
  render() {
  	const {todos, filter} = this.props.store
  	const todoList = todos.map(todo =>(
  			<li key={todo.id}>
  			<label>
	  			<input type="checkbox" checked={todo.complete} value={todo.complete} 
	  			onChange={this.toggleCheck.bind(this,todo)}/>
	  			{todo.name}
			</label>
  			</li>
  		))
    return (
    	<div>
		<h1> React with MOBX</h1>
		{filter}
		<input type="text" placeholder="Add new TODO"
			defaultValue={this.state.newTodoVal}
			onChange={(event) =>this.setState({newTodoVal: event.target.value})}/>
		<button onClick={this.newTodo.bind(this)}>Add new TODO</button>
		<ul>
			{todoList}
		</ul>
    	</div>
      
    );
  }
}

export default App;
