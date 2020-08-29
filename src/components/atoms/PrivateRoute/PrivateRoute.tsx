import React, { useLayoutEffect } from 'react';
import { auth } from 'firebase';
import { useHistory, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...props }) => {
  const history = useHistory();

  useLayoutEffect(() => {
    const userLogged = auth().currentUser;

    if (!userLogged) {
      //history.replace('/login');
    }
  }, [history]);

  return <Route {...props} />;
};

export default PrivateRoute;
