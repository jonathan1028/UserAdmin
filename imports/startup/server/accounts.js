Accounts.onCreateUser((options, user) => {
  console.log("User info", options, user);
  if(Meteor.settings-development.super-admins.indexOf(options.email) > -1){
    user.roles = ['super-admin'];
  }

  return user;
})
