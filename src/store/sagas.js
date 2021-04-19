 import {
 	call,
 	put,
 	takeEvery,
 } from 'redux-saga/effects'
 import {
 	GET_INIT_LIST
 }
 from './actionTypes';
 import {
 	getInitialListItemAction
 } from './actionCreators';
 import axios from 'axios';



 function* getInitList() {
 	try {
 		const res = yield axios.get('https://run.mocky.io/v3/b3ccf502-5ec4-47e4-ba76-a868a55ed00d');
 		const action = getInitialListItemAction(res.data);
 		yield put(action);
 	} catch (e) {
 		console.log('error')
 	}
 }
 //generator 函数
 //接受到GET_INIT_LIST就执行getInitList
 function* mySaga() {
 	yield takeEvery(GET_INIT_LIST, getInitList);
 }
 export default mySaga;