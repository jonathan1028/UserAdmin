// Client entry point, imports all client code

import React, {Component} from 'react';
import { render } from 'react-dom';
import '../imports/startup/client/routes';
import Books from '../imports/ui/containers/Books';

//method render from react-dom package
//This method renders a React component to the <div> with the id='react-root'
render(
  <Books />,
  document.getElementById('react-root')
);



//Testing
//Get a better idea of what 'default' is for
export default class Welcome extends React.Component {
  //according to documentation: Class components should always call the base constructor and super with props.
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello!',
      name: 'Dawg',
      todos: ['Make the bed', 'water plants', 'eat breakfast'],
    };
  }

  // WARNING: this syntax is experimental!
  // Using an arrow function here autobinds the method and prevent the need for:
  // this.handleClick = this.handleClick.bind(this); in the constructor
  handleClick = () => {
    alert(this.state.message);
  }

  clicked = () => {
    console.log('you clicked me');
  }

  onDelete = (item) => {
      let updatedTodos = this.state.todos.filter((val,index) => {
          return item !== val;
      })
      this.setState(
        {todos: updatedTodos}
      )
  }

  render(){
    //need .bind(this) in order to allow the scope of this within the function to refer to the Component
    // setTimeout(function(){
    //   this.setState({name: 'Jonathan'});
    // }.bind(this), 3000)
    //or write as an arrow function
    setTimeout(()=>{
      this.setState({name: 'Jonathan'});
    }, 3000);

    //Make sure to add a key to all iterators
    let todos = this.state.todos.map((item, index) => {
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    });

    return(
      <div>
        <h1>Welcome!</h1>
        <p>Message: {this.state.message} {this.state.name}</p>
        <button onClick={this.handleClick}>
          Say hello
        </button>
        <div id='todo-list'>
          <h2 onClick={this.clicked}>Todo List</h2>
          <ul>{todos}</ul>
        </div>
      </div>
    );
  }
}

export class TodoItem extends React.Component {

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

render(
  <Welcome
    //mssg='test message'
  />,
  document.getElementById('welcome')
);





//method render from react-dom package
//This method is responsible for rendering a React component to the screen
// render(
//   <Books
//     firstName="Alaina"
//     readBooks={[
//       { title: 'Liminal Thinking', author: 'Dave Gray' },
//       { title: 'Personal History', author: 'Katharine Graham' },
//       { title: 'Born Standing Up', author: 'Steve Martin' },
//     ]}
//     unreadBooks={[
//       { title: 'The Course of Love', author: 'Alain De Botton' },
//       { title: 'Too Soon Old, Too Late Smart', author: 'Gordon Livingston' },
//       { title: 'Servant Leadership', author: 'Robert K. Greenleaf' },
//     ]}
//   />,
//   //passing the books to element in main.html to be rendered
//   document.getElementById('react-root')
// );
