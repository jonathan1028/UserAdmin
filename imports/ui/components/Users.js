import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
//import { Users as UsersCollection } from '../../api/books/books.js';


export class Users extends React.Component {
  render(){
    return(
      <div>

        <h1>Users List</h1>
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

              {this.props.users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>Role</td>
                    <td></td>
                    <td></td>
                    <td>{user.emails[0].address}</td>
                    <td></td>
                    <td></td>
                    {/* <td>{user.createdAt}</td> */}
                    <td></td>
                    <td></td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>

        {/* <form className='add-user' onSubmit={this.addUser}> */}
        <form className='add-user'>
          <input type='text' ref='firstName'/>
          <input type='text' ref='lastName'/>
          <button type='submit'>Add User</button>
        </form>


      </div>
    );
  }
}


export default createContainer(() => {
  const subscription = Meteor.subscribe('userData');

  return {
    users: Meteor.users.find().fetch(),
  };
}, Users);
