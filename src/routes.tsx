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
          <PrivateRoutes path='/' screen={LoginScreen} />
          <PrivateRoutes path='/login' screen={LoginScreen} />
        </Switch>
      </Router>
    </React.Suspense>
  );
};

export default Routes;
