import { Meteor } from 'meteor/meteor';
import { Users } from '../users';

Meteor.publish('currentUser', function() {
  return Meteor.users.find({_id: this.userId});
});
