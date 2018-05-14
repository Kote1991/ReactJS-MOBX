import { autorun, observable, computed } from 'mobx';
import Todo from './todoTaskStore'
class TodoStore {
	@observable todos = [

	]
	@observable filter = "All"

	@computed get todosCount() {
		return this.todos.length;
	}
	@computed get completedTodosCount() {
		return (this.todos.filter(
			(todo) => {
				return todo.complete == true
			}
		).length)
	}
	addNewTodo(todoVal) {
		this.todos.push(new Todo(todoVal));
		console.log('Todos values ', store.todos);
	}

}


var store = window.store = new TodoStore


export default store;

//autorun will excutated where ever changes in store values
autorun(() => {

	console.log('TodoStore Filtre ' + store.filter);
	console.log('Todos values ', store.todos);
})