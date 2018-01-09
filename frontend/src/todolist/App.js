import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

import './style.css';


class App extends Component {

	id = 5;

	state = {
		input : '',
    	todos: [
			{  id:0, text: ' 리액트 소개1', checked:true },
			{  id:1, text: ' 리액트 소개2', checked:true },
			{  id:2, text: ' 리액트 소개3', checked:false },
			{  id:3, text: ' 리액트 소개4', checked:true },
			{  id:4, text: ' 리액트 소개5', checked:true }
    		]
	}

	handleChange = (e) => {
		this.setState({
			input:e.target.value
		});
	}

  	handleCreate = () => {
		const { input, todos } = this.state;

		if(input==='') return alert('내용을 입력해 주세요');

		this.setState({
			input:'',
			todos: todos.concat({
				id:this.id++,
				text:input,
				checked : false
			})
		});
	}

	handleKeyPress = (e) => {
		if(e.key === 'Enter'){
			this.handleCreate();
		}
	}

	handleToggle = (id) => {
		const {todos} = this.state;

		//id로 넘어온 값을 todos id와 비교)
		//const index = (todos.findIndex(x => x.id === id);
		const index = todos.map(x=>x.id).indexOf(id);

		//1. 새로운 배열복사
		const newtodo = [...todos];
		const newindex = newtodo[index];

		//2. 새로운 배열에서 index의 값중에 checked를 not하여 덮어씀.
		newtodo[index] = {
			...newindex,
			checked : !newindex.checked
		}

		//3. setState
		this.setState({
			todos : newtodo
		})

	}

	handleRemove = (id) =>{
		const {todos} = this.state;

		const index = todos.map(x=>x.id).indexOf(id);
		todos.splice(index, 1);

		const newtodo =  todos;

		this.setState({
			todos: newtodo
		})

	}

  	render() {

        return (
				<div className="wrap">

					<div className='title'> To-Do List </div>

					<TodoInput value={this.state.input}
										onChange = {this.handleChange}
										onCreate = {this.handleCreate}
										onKeyPress = {this.handleKeyPress}
					/>

					<TodoList
					todos={this.state.todos}
					onToggle={this.handleToggle}
					onRemove={this.handleRemove}
					/>

	            </div>
        );
    }
}


export default App;
