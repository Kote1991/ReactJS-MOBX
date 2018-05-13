import {autorun, observable} from 'mobx';

class Todo {
	@observable name
	@observable id
	@observable complete

	constructor(value){
		this.name = value,
		this.id =  'ko_'+Date.now(),
		this.complete = true
	}

}

export default Todo;