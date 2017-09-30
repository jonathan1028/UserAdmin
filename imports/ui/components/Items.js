import React from 'react';
// import BooksList from './BooksList';
// import AddBook from './AddBook.js';

import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
//import Books from '../components/Books';
//import { Books as BooksCollection } from '../../api/books/books.js';
import { Items as ItemsCollection } from '../../api/items.js';


export class Items extends React.Component {
  // constructor(props) {
  //   super(props);
  //   //this.state = { activeTab: 'read' };
  //   //this.setActiveClassOnTab = this.setActiveClassOnTab.bind(this);
  //   //this.handleChangeTabs = this.handleChangeTabs.bind(this);
  // }

  // setActiveClassOnTab(tab) {
  //   return this.state.activeTab === tab ? 'active' : '';
  // }
  //
  // handleChangeTabs(event) {
  //   this.setState({ activeTab: event.target.getAttribute('data-tab') });
  // }

  render() {
    return (
      // <div className="Books">
      //   <h4>{`${this.props.firstName}'s`} Books</h4>
      //   <AddBook />
      //   <ul className="tabs clearfix">
      //     <li onClick={ this.handleChangeTabs } className={`tab ${this.setActiveClassOnTab('read')}`} data-tab="read">Read</li>
      //     <li onClick={ this.handleChangeTabs } className={`tab ${this.setActiveClassOnTab('unread')}`} data-tab="unread">Unread</li>
      //   </ul>
      //   <div className="tabs-data">
      //     <BooksList
      //       type="read"
      //       books={ this.props.readBooks }
      //       isActive={ this.setActiveClassOnTab('read') }
      //     />
      //     <BooksList
      //       type="unread"
      //       books={ this.props.unreadBooks }
      //       isActive={ this.setActiveClassOnTab('unread') }
      //     />
      //   </div>
      <div>
        <div>
          <h2>Test</h2>
          {/* <h4>{this.props.firstName} Books</h4> */}
          <h4>Items</h4>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <th>Role</th>
                  <th>Firstname</th>
                  <th>Lastname</th>
                  <th>Email</th>
                  <th>Last Login</th>
                  <th>Country</th>
                  <th>Sign Up</th>
                  <th>Suspend</th>
                </tr>
                {this.props.items.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{ item.itemOne.text }</td>
                      <td>Smith</td>
                      <td>Smith</td>
                      <td>Email</td>
                      <td>yesterday</td>
                      <td>USA</td>
                      <td>10.21.15</td>
                      <td></td>
                    </tr>
                  )
                })}


                <tr>
                  <td>Sales Person</td>
                  <td>Eve</td>
                  <td>Jackson</td>
                  <td>Email</td>
                  <td>yesterday</td>
                  <td>USA</td>
                  <td>5.12.14</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    );
  }
}

// export default createContainer(() => {
//   const subscription = Meteor.subscribe('books');
//
//   return {
//     firstName: 'Alaina',
//     readBooks: BooksCollection.find({ read: true }).fetch(),
//     // unreadBooks: BooksCollection.find({ read: false }).fetch(),
//   };
// }, Books);

export default createContainer(() => {
  let itemsSub = Meteor.subscribe('allItems');
  return {
    items: ItemsCollection.find({}).fetch()
  }
}, Items);
