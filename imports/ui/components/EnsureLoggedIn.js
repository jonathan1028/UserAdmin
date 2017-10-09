import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class EnsureLoggedIn extends React.Component {
  // componentDidMount() {
  //   const { dispatch, currentURL } = this.props
  //
  //   if (!isLoggedIn) {
  //     // set the current url/path for future redirection (we use a Redux action)
  //     // then redirect (we use a React Router method)
  //     //dispatch(setRedirectUrl(currentURL))
  //     browserHistory.replace("/login")
  //   }
  // }
  //
  render() {
    return (<h1>Test 3</h1>);
    // if (isLoggedIn) {
    //   return this.props.children
    // } else {
    //   return null
    // }
  }
}



export default createContainer(() => {
  //const subscription = Meteor.subscribe('books');
  //const subscription = Meteor.subscribe('userData');
  return {
    isLoggedIn: Meteor.userId()
  };
}, EnsureLoggedIn);
