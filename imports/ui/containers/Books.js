import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Books from '../components/Books';
import { Books as BooksCollection } from '../../api/books/books.js';

//Removed props from createContainer ((props) => should be put back to restore to original
