import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Text from 'components/atoms/Text/Text';

import * as Styled from './styles';

import SIDEBAR_OPTIONS from './SIDEBAR_OPTIONS';

const Sidebar: React.FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const onClickOptionSidebarHandler = route => {
    history.push(route);
  };

  const renderItemSidebar = ({ text, route }) => {
    const selected: boolean = route === pathname;

    return (
      <Styled.WrapperItemSidebar
        key={route}
        onClick={() => onClickOptionSidebarHandler(route)}
        selected={selected}
      >
        <Text>{text}</Text>
      </Styled.WrapperItemSidebar>
    );
  };

  return (
    <Styled.Container>
      {SIDEBAR_OPTIONS.map(renderItemSidebar)}
    </Styled.Container>
  );
};

export default Sidebar;
