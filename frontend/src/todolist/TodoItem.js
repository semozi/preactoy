import React, { Component } from 'react';
import DragSortableList from 'react-drag-sortable';


class TodoItem extends Component {
  render() {
    const {onToggle, onRemove, text, id, checked} = this.props;
    const list  = [
      {content: (<div>{text}</div>) }
    ]
    return (
          /*
          <div className="todoItem">
            <div className={checked ? 'checked' : '' } onClick={()=>onToggle(id)}>{text}</div>
            <button onClick={()=>onRemove(id)}>X</button>
          </div>
          */

         <DragSortableList items={list} />

    );
  }
}

export default TodoItem;