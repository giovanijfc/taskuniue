import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoutes from 'components/atoms/PrivateRoutes/PrivateRoutes';

const LoginScreen = React.lazy(() => import('screens/LoginScreen/LoginScreen'));

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
          <PrivateRoutes path='/tasks' component={LoginScreen} />
          <PrivateRoutes path='/notifications' component={LoginScreen} />
        </Switch>
      </Router>
    </React.Suspense>
  );
};
export default Routes;
