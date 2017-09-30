import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

//export allows this to be available on client or server
export const Items = new Mongo.Collection('items');

if (Meteor.isServer) {
  Meteor.publish('allItems', function() {
    return Items.find();
  });

}
