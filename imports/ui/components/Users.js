import React from 'react';

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
              <tr>
                <td>Bookkeeper</td>
                <td>Jill</td>
                <td>Smith</td>
                <td>Email</td>
                <td>yesterday</td>
                <td>USA</td>
                <td>10.21.15</td>
                <td></td>

              </tr>
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
    );
  }
}
