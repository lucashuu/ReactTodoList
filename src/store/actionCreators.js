 import {
   CHNAGE_INPUT_VALUE,
   ADD_TODO_ITEM,
   DELETE_TODO_ITEM,
   DELETE_TODO_ITEM_POP,
   INITIAL_LIST_ITEM,
   GET_INIT_LIST
 } from './actionTypes';
 import axios from 'axios';

 export const getInputChangeAction = (value) => ({
   type: CHNAGE_INPUT_VALUE,
   value
 });

 export const getAddItemAction = () => ({
   type: ADD_TODO_ITEM
 });

 export const getPopItemAction = () => ({
   type: DELETE_TODO_ITEM_POP
 });

 export const getDeleteItemAction = (index) => ({
   type: DELETE_TODO_ITEM,
   index
 });

 export const getInitialListItemAction = (data) => ({
   type: INITIAL_LIST_ITEM,
   data
 })
 export const getInitList = () => ({
   type: GET_INIT_LIST
 })
 //使用redux thunk 之后你的 action 可以是一个函数
 /*
  export const getListItem = () => {
  	return (dispatch) => {
  		//store的dispatch方法可以作为一个参数被接收
  		axios.get('https://run.mocky.io/v3/b3ccf502-5ec4-47e4-ba76-a868a55ed00d')
  			.then((res) => {
  				const data = res.data;
  				const action = getInitialListItemAction(data);
  				dispatch(action);
  			})
  			.catch((error) => {
  				alert(error);
  			})
  	};
  }
  */