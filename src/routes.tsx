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
const ForgotPassword = React.lazy(() =>
  import('screens/ForgotPassword/ForgotPassword')
);
const CreateAccount = React.lazy(() =>
  import('screens/CreateAccount/CreateAccount')
);
const HeaderSideRoute = React.lazy(() =>
  import('components/atoms/HeaderSideRoute/HeaderSideRoute')
);
const CreateAccount = React.lazy(() =>
  import('screens/CreateAccount/CreateAccount')
);

const Routes = () => {
  return (
    <React.Suspense
      fallback={
        <div
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '100vw',
            height: '100vh',
            background: 'gray'
          }}
        >
          Loading...
        </div>
      }
    >
      <Router>
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/ForgotPassword' component={ForgotPassword} />
          <Route exact path='/CreateAccount' component={CreateAccount} />
          <PrivateRoutes path='/' component={LoginScreen} />
          <PrivateRoutes path='/notifications' component={LoginScreen} />
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default Routes;
