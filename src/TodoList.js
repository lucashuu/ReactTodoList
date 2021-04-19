import React, {
	Component
} from 'react';
import store from './store/';
/*
import {
	CHNAGE_INPUT_VALUE,
	ADD_TODO_ITEM,
	DELETE_TODO_ITEM,
	DELETE_TODO_ITEM_POP
} from './store/actionTypes';
*/
import {
	getInputChangeAction,
	getAddItemAction,
	getDeleteItemAction,
	getPopItemAction,
	getInitList
	//getInitialListItemAction,
	//getListItem
}
from './store/actionCreators';
import TodoListUI from './TodoListUI';
//import axios from 'axios';

class TodoList extends Component {

	constructor(props) {
		super(props);
		this.state = store.getState();
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.hanleBtnClick = this.handleBtnClick.bind(this);
		this.hanleBtnClick2 = this.handleBtnClick2.bind(this);
		this.handleItemDelete = this.handleItemDelete.bind(this);
		//console.log(store.getState());
		store.subscribe(this.handleStoreChange);
	}
	render() {
		return ( < TodoListUI inputValue = {
				this.state.inputValue
			}
			list = {
				this.state.List
			}
			handleInputChange = {
				this.handleInputChange
			}
			handleBtnClick = {
				this.handleBtnClick
			}
			handleBtnClick2 = {
				this.handleBtnClick2
			}
			handleItemDelete = {
				this.handleItemDelete
			}
			/ >
		)
	}

	componentDidMount() {
		const action = getInitList();
		store.dispatch(action);
		//const action = getListItem();
		//store.dispatch(action);
		/*
		axios.get('https://run.mocky.io/v3/b3ccf502-5ec4-47e4-ba76-a868a55ed00d').then((res) => {
			const data = res.data;
			const action = getInitialListItemAction(data);
			store.dispatch(action);
		})
		*/
	}

	handleInputChange(e) {
		//console.log(e.target.value);
		const action = getInputChangeAction(e.target.value)
		store.dispatch(action);
	}
	handleStoreChange() {
		this.setState(store.getState());
	}
	handleBtnClick() {
		const action = getAddItemAction();
		store.dispatch(action);
	}
	handleBtnClick2() {
		const action = getPopItemAction();
		store.dispatch(action);
	}
	handleItemDelete(index) {
		const action = getDeleteItemAction(index);
		store.dispatch(action);
	}

}

export default TodoList;