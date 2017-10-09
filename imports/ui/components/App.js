import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

//import { Accounts } from 'meteor/std:accounts-ui';
// Accounts.ui.config({
//   passwordSignupFields: 'EMAIL_ONLY',
//   loginPath: '/',
// });


export class App extends React.Component {
  render(){
    return(
      <div>
        { this.props.currentUser ?
          <h1>Test</h1> : ''
        }

        {/* <Accounts.ui.LoginForm /> */}
        <h1>Application Code</h1>
        <h1>{this.props.currentUser}</h1>
      </div>

    );
  }
}

export default createContainer(() => {
  //const subscription = Meteor.subscribe('books');
  //const subscription = Meteor.subscribe('userData');
  return {
    currentUser: Meteor.userId()
  };
}, App);
