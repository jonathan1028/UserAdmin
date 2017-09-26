import React from 'react';

export default MainLayout = (props) => {
  return (
    <div className='main-layout'>
      <h1>Main Layout</h1>
      {props.children}
    </div>
  )
}
