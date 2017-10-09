import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect} from 'react-router-dom'
import {render} from 'react-dom';
import LandingPage from '../../ui/layouts/LandingPage';
import MainLayout from '../../ui/layouts/MainLayout';
import AdminLayout from '../../ui/layouts/AdminLayout';
import App from '../../ui/components/App';
import {EnsureLoggedIn} from '../../ui/components/EnsureLoggedIn';
import {AdminDashboard} from '../../ui/components/AdminDashboard';
import {Users} from '../../ui/components/Users';
import {Voting} from '../../ui/components/Voting';

//method render from react-dom package
//This method renders a React component to the <div> with the id='root'

const checkAuth = () => {
  return Meteor.userId();
}


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    checkAuth() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        //state: { from: props.location }
      }}/>
    )
  )}/>
)



render(
  <Router>
    <div>
      <Route exact={true} path={'/'} component={LandingPage}/>

      {/* <PrivateRoute component={Users}/> */}
      <PrivateRoute path={'/dashboard'} component={MainLayout}/>
      {/* <PrivateRoute exact={true} path={'/dashboard'} component={App}/> */}

      <Route path={'/admin'} component={AdminLayout}></Route>
      <Route exact={true} path={'/admin/dashboard'} component={AdminDashboard}></Route>
      <Route path={'/admin/users'} component={Users}></Route>
      <Route path={'/admin/voting'} component={Voting}></Route>
    </div>
  </Router>,
  document.getElementById('root')
);
