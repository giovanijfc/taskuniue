import React, { useLayoutEffect } from 'react';
import { auth } from 'firebase';
import { useHistory, Route } from 'react-router-dom';

const Sidebar = React.lazy(() =>
  import('components/organisms/Sidebar/Sidebar')
);

const PrivateRoutes = props => {
  const history = useHistory();

  useLayoutEffect(() => {
    const userLogged = auth().currentUser;

    if (!userLogged) {
      //history.replace('/login');
    }
  }, [history]);

  return (
    <>
      <Sidebar />
      <Route {...props} />
    </>
  );
};

export default PrivateRoutes;
