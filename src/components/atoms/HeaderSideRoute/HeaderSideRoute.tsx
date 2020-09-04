import React from 'react';

import PrivateRoute from 'components/atoms/PrivateRoute/PrivateRoute';

import useSidebar from 'hooks/useSidebar';

import * as Styled from './styles';

const Header = React.lazy(() => import('components/organisms/Header/Header'));
const Sidebar = React.lazy(() =>
  import('components/organisms/Sidebar/Sidebar')
);

const HeaderSideRoute = ({ component: Component, ...props }) => {
  const sidebar = useSidebar(true);

  return (
    <PrivateRoute
      {...props}
      component={Component}
      render={() => (
        <Styled.ContainerRender>
          <Header {...sidebar} />
          <Styled.WrapperRow>
            <Sidebar {...sidebar} />
            <Component />
          </Styled.WrapperRow>
        </Styled.ContainerRender>
      )}
    />
  );
};
export default HeaderSideRoute;
