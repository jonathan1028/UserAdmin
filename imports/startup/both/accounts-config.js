import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  //passwordSignupFields: 'USERNAME_ONLY',
  passwordSignupFields: 'EMAIL_ONLY',
});
