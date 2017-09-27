import { Meteor } from 'meteor/meteor';
import { Users } from './users';

Meteor.methods({
  addUser(user) {
    return users.insert(user);
  }
});
