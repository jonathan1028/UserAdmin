import React from 'react';
//import BooksList from './BooksList';
//import Books from './Books';
import Books from './Books';
import Items from './Items';

import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
//import Items from '../../api/items.js';


export class Voting extends React.Component {

  render(){
    return(
      <div>

        <h1>Voting</h1>
        <Books />

        {/* {this.props.items.map((item) => {
          return (
            <div>{item.itemOne.text}</div>
          )
        })} */}
        <h1>Items Area</h1>
        <Items />

      </div>
    );
  }
}

export default createContainer(() => {
  let itemsSub = Meteor.subscribe('allItems');
  return {
    items: Items.find({}).fetch()
  }
}, Voting);

// export default createContainer((props) => {
//   const subscription = Meteor.subscribe('books');
//
//   return {
//     firstName: 'Alaina',
//     readBooks: BooksCollection.find({ read: true }).fetch(),
//     unreadBooks: BooksCollection.find({ read: false }).fetch(),
//   };
// }, Voting);
