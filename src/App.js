import React, {
	Component,
	Fragment
} from 'react';
import {
	CSSTransition
} from 'react-transition-group';
import {
	TransitionGroup
} from 'react-transition-group';

import './style2.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
		this.handleToggole = this.handleToggole.bind(this);
		this.handleAddItem = this.handleAddItem.bind(this);
	}

	render() {
		return (
			//Fragment 只是一个占位符 解决多个dom元素 不会被渲染
			//onEntered 钩子函数 当入场动画结束之后被执行
			<Fragment> 
				<TransitionGroup>  
				{
					this.state.list.map((item, index) => {
						return (
							<CSSTransition
							in = {this.state.show}
							timeout = {500}
							classname='fade'
							unmountOnExit
							onEntered={(el) => {el.style.color='blue'}}
							appear={true}
							key= {index}
							>  
							<div>{item}</div>	
							</CSSTransition>
						)
					})	
				}
				</TransitionGroup>
				<button onClick={this.handleAddItem}>toggle</button>
			</Fragment>
		)
	}

	handleAddItem() {
		this.setState((prevState) => {
			return {
				list: [...prevState.list, 'item']
			}
		})
	}

	handleToggole() {
		this.setState({
			show: this.state.show ? false : true
		})
	}
}

export default App;