import React from 'react';

export default AdminLayout = (props) => {
  return (
    <div className='admin-layout'>
      <h1>Admin Layout</h1>
      {props.children}
    </div>
  )
}
