import { Meteor } from 'meteor/meteor';
import { Users } from '../users';

Meteor.publish('userData', function() {
  return Meteor.users.find({}, {
      //fields: {firstName: 1, email: 1}
    })
});
