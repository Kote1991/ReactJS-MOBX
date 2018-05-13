import {autorun, observable} from 'mobx';
import Todo from './todoTaskStore'
class TodoStore{
	@observable todos =	[]
	@observable filter = "All"

	addNewTodo(todoVal){
		this.todos.push(new Todo(todoVal));
		console.log('Todos values ',store.todos);
	}
}


var store = window.store = new TodoStore


export default store;

//autorun will excutated where ever changes in store values
autorun(() =>{

	console.log('TodoStore Filtre '+store.filter);
	console.log('Todos values ',store.todos);
})