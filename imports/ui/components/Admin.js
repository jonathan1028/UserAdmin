import React from 'react';
import {Welcome} from './Welcome.js';

export class Admin extends React.Component {
  render(){
    return(
      <div>
        <h1>Admin Dashboard</h1>
        <Welcome/>
      </div>
    );
  }
}
