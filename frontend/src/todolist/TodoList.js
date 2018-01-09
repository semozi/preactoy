import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {

   render(){
   		// const {todos, onToggle} = this.props;
		const todoList = this.props.todos.map(
			todo => (
				<TodoItem
					{...todo}
					key={todo.id}
					onToggle={this.props.onToggle}
					onRemove={this.props.onRemove}
				/>

				/*
				<TodoItem
					id = {id}
					text={todo.text}
					key={todo.id}
					onToggle={this.props.onToggle}
					onRemove={this.props.onRemove}
				/>
				*/
			)
		);

       return (
			<div>
				{todoList}
			</div>
       );
   }
}


export default TodoList;