import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {render} from 'react-dom';
import LandingPage from '../../ui/layouts/LandingPage';
import MainLayout from '../../ui/layouts/MainLayout';
import AdminLayout from '../../ui/layouts/AdminLayout';
import {App} from '../../ui/components/App';
import {AdminDashboard} from '../../ui/components/AdminDashboard';
import {Users} from '../../ui/components/Users';

//method render from react-dom package
//This method renders a React component to the <div> with the id='root'
render(
  <BrowserRouter>
    <div>
      <Route exact={true} path={'/'} component={LandingPage}/>

      <Route exact={true} path={'/dashboard'} component={MainLayout}/>
      <Route exact={true} path={'/dashboard'} component={App}/>

      <Route path={'/admin'} component={AdminLayout}></Route>
      <Route exact={true} path={'/admin/dashboard'} component={AdminDashboard}></Route>
      <Route path={'/admin/users'} component={Users}></Route>
    </div>
  </BrowserRouter>,

  document.getElementById('root')
);




// Meteor.startup(() =>{
//   render(
//     // <Router history={browserHistory}>
//     //   {/* <Route path='/' component={App} /> */}
//     // </Router>,
//     //document.getElementById('render-target')
//   );
//
// });
