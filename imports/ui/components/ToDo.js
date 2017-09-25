import React from 'react';

export class ToDoItem extends React.Component {

  handleDelete = () => {
    this.props.onDelete(this.props.item);
    console.log(this.props.item);
  }

  render(){
    return(
      <li>
        <div className='todo-item'>
          <span className='item-name'>{this.props.item}</span>
          <span className='item-delete' onClick={this.handleDelete}>X</span>
        </div>
      </li>
    );
  }
}
