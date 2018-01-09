import React, { Component } from 'react';


class TodoItem extends Component {
  render() {
    const {onToggle, onRemove, text, id, checked} = this.props;
    return (
          <div className="todoItem">
            <div className={checked ? 'checked' : '' } onClick={()=>onToggle(id)}>{text}</div>
            <button onClick={()=>onRemove(id)}>X</button>
          </div>
    );
  }
}

export default TodoItem;