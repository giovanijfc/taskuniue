import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

import FallbackLoading from 'components/templates/FallbackLoading/FallbackLoading';
import KanbanScreen from 'screens/KanbanScreen/KanbanScreen';

const LoginScreen = React.lazy(() => import('screens/LoginScreen/LoginScreen'));
const ForgotPassword = React.lazy(() =>
  import('screens/ForgotPassword/ForgotPassword')
);
const CreateAccount = React.lazy(() =>
  import('screens/CreateAccount/CreateAccount')
);
const HeaderSideRoute = React.lazy(() =>
  import('components/atoms/HeaderSideRoute/HeaderSideRoute')
);

const Routes = () => (
  <React.Suspense fallback={FallbackLoading}>
    <Router>
      <Switch>
        <Route exact path='/login' component={LoginScreen} />
        <Route exact path='/forgotpassword' component={ForgotPassword} />
        <Route exact path='/CreateAccount' component={CreateAccount} />

        <HeaderSideRoute exact path='/kanban' component={KanbanScreen} />
        <HeaderSideRoute exact path='/notifications' component={KanbanScreen} />

        <Route exact path='*' render={() => <Redirect to='/login' />} />
      </Switch>
    </Router>
  </React.Suspense>
);

export default Routes;
