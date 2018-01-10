import React from 'react';
// import TodoItem from './TodoItem';

import DragSortableList from 'react-drag-sortable';

class TodoList extends React.Component {




   render(){

   		const {onToggle, onSort, onRemove} = this.props;

		const list = this.props.todos.map(
			todo => (
				{
					content: <div className={todo.checked ? 'checked' : '' } id={todo.id} text={todo.text} checked={todo.checked} onClick={()=>onToggle(todo.id)}> {todo.text}
						<button onClick={(e)=>onRemove(e, todo.id)}>X</button></div>
				}
			)
		);

       return (
			<DragSortableList items={list} onSort={onSort} />
       );
   }
}


export default TodoList;