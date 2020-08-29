import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import HeaderSideRoute from 'components/atoms/HeaderSideRoute/HeaderSideRoute';

const LoginScreen = React.lazy(() => import('screens/LoginScreen/LoginScreen'));
const HomeScreen = React.lazy(() => import('screens/HomeScreen/HomeScreen'));

const Routes = () => (
  <React.Suspense
    fallback={
      <div
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          background: 'red'
        }}
      >
        Loading...
      </div>
    }
  >
    <Router>
      <Switch>
        <Route exact path='/login' component={LoginScreen} />

        <HeaderSideRoute exact path='/home' component={HomeScreen} />
        <HeaderSideRoute exact path='/tasks' component={LoginScreen} />
        <HeaderSideRoute exact path='/notifications' component={LoginScreen} />

        <Route exact path='*' render={() => <Redirect to='/login' />} />
      </Switch>
    </Router>
  </React.Suspense>
);

export default Routes;
