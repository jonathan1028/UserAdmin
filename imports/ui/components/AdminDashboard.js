import React from 'react';
import {Welcome} from './Welcome.js';
import Users from './Users';

export class AdminDashboard extends React.Component {
  render(){
    return(
      <div>
        <h1>Admin Dashboard</h1>
        <Users/>
      </div>
    );
  }
}
