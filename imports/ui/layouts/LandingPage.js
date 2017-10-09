import React from 'react';
import AccountsUIWrapper from '../components/AccountsUIWrapper.js';

export default LandingPage = (props) => {
  return (
    <div className='landing-page'>
      <h1>Landing Page</h1>
      <AccountsUIWrapper />
      {props.children}
    </div>
  )
}
