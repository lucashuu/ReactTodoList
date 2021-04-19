import {
	CHNAGE_INPUT_VALUE,
	ADD_TODO_ITEM,
	DELETE_TODO_ITEM,
	DELETE_TODO_ITEM_POP,
	INITIAL_LIST_ITEM
} from './actionTypes'

const defaultState = {
	inputValue: '',
	List: []
}

//笔记本默认什么都不存储

//state => 整个仓库存储的数据
//state => 用户上一次存储的数据
//reducer 可以接受state,但是绝对不能修改state
//纯函数指的是,给定固定的输入，就一定会有固定的输出，而且不会有任何的副作用
export default (state = defaultState, action) => {
	if (action.type === CHNAGE_INPUT_VALUE) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	if (action.type === INITIAL_LIST_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.List = action.data;
		return newState;
	}
	if (action.type === ADD_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.List.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}
	if (action.type === DELETE_TODO_ITEM_POP) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.List.pop();
		//newState.inputValue = '';
		return newState;
	}
	if (action.type === DELETE_TODO_ITEM) {
		const newState = JSON.parse(JSON.stringify(state));
		newState.List.splice(action.index, 1);
		//newState.inputValue = '';
		return newState;
	}
	//console.log(state, action)
	return state;
}