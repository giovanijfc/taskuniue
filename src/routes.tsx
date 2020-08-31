import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import FallbackLoading from 'components/templates/FallbackLoading/FallbackLoading';

const LoginScreen = React.lazy(() => import('screens/LoginScreen/LoginScreen'));
const TasksScreen = React.lazy(() => import('screens/TasksScreen/TasksScreen'));
const HeaderSideRoute = React.lazy(() =>
  import('components/atoms/HeaderSideRoute/HeaderSideRoute')
);

const Routes = () => (
  <React.Suspense fallback={FallbackLoading}>
    <Router>
      <Switch>
        <Route exact path='/login' component={LoginScreen} />

        <HeaderSideRoute exact path='/tasks' component={TasksScreen} />
        <HeaderSideRoute exact path='/notifications' component={TasksScreen} />

        <Route exact path='*' render={() => <Redirect to='/login' />} />
      </Switch>
    </Router>
  </React.Suspense>
);

export default Routes;
