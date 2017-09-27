Accounts.onCreateUser((options, user) => {
  console.log("User info", options, user);
  return user;
})
