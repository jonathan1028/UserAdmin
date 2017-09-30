// Server entry point, imports all server code

import {Meteor} from 'meteor/meteor'
import Items from '../imports/api/items.js'
import '../imports/api/users/users.js'

import '../imports/startup/server/index'



Meteor.startup(() => {
  // Items.insert({
  //   itemOne: {
  //     text: 'Hi',
  //     value: 0,
  //   },
  //   itemTwo: {
  //     text: 'Hello',
  //     value: 0,
  //   }
  // });
});

// Meteor.startup(() => {
//   // code to run on server at startup
// });
