import React from 'react';
import {render} from 'react-dom';
import { Accounts } from 'meteor/std:accounts-ui';

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
  loginPath: '/',
});


export class App extends React.Component {
  render(){
    return(
      <div>
        <h1>Application Code</h1>
        <Accounts.ui.LoginForm />
      </div>

    );
  }
}
