// import { Mongo } from 'meteor/mongo';
// import SimpleSchema from 'simpl-schema';
//
// const Users = new Mongo.Collection('users');
//
// const UsersSchema = Users.attachSchema(new SimpleSchema({
//   firstName: string,
//   lastName: string,
//   email: string,
//   role: string,
//   lastLogin: date,
//   country: string,
//   signUp: date,
//   suspended: bool,
// }));
//
// Meteor.methods({
//   userInsert: function(doc) {
//     check(this.userId, String);
//     check(doc, Users.simpleSchema());
//
//     var user = Meteor.user();
//
//     obj = _.extend(doc, {
//       userId: user._id,
//       author: user.username,
//       submitted: new Date()
//     });
//
//     var id = Users.insert(doc);
//
//     return id;
//   },
// });
