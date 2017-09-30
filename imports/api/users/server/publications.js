import { Meteor } from 'meteor/meteor';
import { Users } from '../users';

Meteor.publish('userData', function() {
  return Meteor.users.find({}, {
      fields: { createdAt: 1, emails: 1 }
    })
});
