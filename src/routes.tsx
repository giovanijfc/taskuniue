import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import FallbackLoading from 'components/templates/FallbackLoading/FallbackLoading';

const LoginScreen = React.lazy(() => import('screens/LoginScreen/LoginScreen'));
const HomeScreen = React.lazy(() => import('screens/HomeScreen/HomeScreen'));
const HeaderSideRoute = React.lazy(() =>
  import('components/atoms/HeaderSideRoute/HeaderSideRoute')
);

const Routes = () => (
  <React.Suspense fallback={FallbackLoading}>
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
