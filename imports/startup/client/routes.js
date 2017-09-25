import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {render} from 'react-dom';
import {Welcome} from '../../../client/main';
import {App} from '../../ui/components/App';
import {Admin} from '../../ui/components/Admin';
import {Users} from '../../ui/components/Users';




render(
  <BrowserRouter>
    <div>
      <Route exact={true} path={'/'} component={App}></Route>
      <Route exact={true} path={'/admin'} component={Admin}></Route>
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
