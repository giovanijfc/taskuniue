import React from 'react';

import PrivateRoute from 'components/atoms/PrivateRoute/PrivateRoute';

import * as Styled from './styles';

const Header = React.lazy(() => import('components/organisms/Header/Header'));
const Sidebar = React.lazy(() =>
  import('components/organisms/Sidebar/Sidebar')
);

const HeaderSideRoute = ({ component: Component, ...props }) => (
  <PrivateRoute
    {...props}
    component={Component}
    render={() => (
      <Styled.ContainerRender>
        <Header />
        <Styled.WrapperRow>
          <Sidebar />
          <Component />
        </Styled.WrapperRow>
      </Styled.ContainerRender>
    )}
  />
);

export default HeaderSideRoute;
