import { Meteor } from 'meteor/meteor';

Accounts.onCreateUser((options, user) => {
  console.log("User created", options, user);
  //user.city = 'Austin';
  user.firstName = options.firstName;
  user.lastName = options.lastName;

  // if(Meteor.settings.superAdmins.indexOf(user.emails[0].address) > -1){
  //   user.roles = ['super-admin'];
  // }

  return user;
})
