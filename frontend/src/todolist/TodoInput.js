import React from 'react';




class TodoInput extends React.Component {

   render(){
       return (
			<div className="todoInput">
				<input value={this.props.value}
				  	   onChange={this.props.onChange}
				  	   onKeyPress={this.props.onKeyPress}
				 />

				<button onClick={this.props.onCreate}
						onKeyPress={this.props.handleKeyPress}>
						추가
				</button>
			</div>
       );
   }
}


export default TodoInput;