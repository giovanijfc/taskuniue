import React, { useLayoutEffect } from 'react';
import { auth } from 'firebase';
import { useHistory, Route } from 'react-router-dom';

const PrivateRoutes = ({ screen, path }) => {
  const history = useHistory();

  useLayoutEffect(() => {
    const userLogged = auth().currentUser;

    if (!userLogged) {
      history.replace('/login');
    }
  }, [history]);

  return <Route component={screen} path={path} />;
};

export default PrivateRoutes;