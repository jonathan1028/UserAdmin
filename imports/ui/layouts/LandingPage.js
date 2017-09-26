import React from 'react';

export default LandingPage = (props) => {
  return (
    <div className='landing-page'>
      <h1>Landing Page</h1>
      {props.children}
    </div>
  )
}
