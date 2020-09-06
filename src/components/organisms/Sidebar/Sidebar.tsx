import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import COLORS from 'styles/guides/colors';

import * as Styled from './styles';

import SIDEBAR_OPTIONS from './SIDEBAR_OPTIONS';
import { SideBarType } from 'hooks/useSidebar';

const Sidebar: React.FC<SideBarType> = sidebar => {
  const history = useHistory();
  const { pathname } = useLocation();

  const onClickOptionSidebarHandler = (route: string) => {
    history.push(route);
  };

  const renderItemSidebar = ({ text, route, Icon }) => {
    const selected: boolean = route === pathname;

    return (
      <Styled.WrapperItemSidebar
        key={route}
        onClick={() => onClickOptionSidebarHandler(route)}
        selected={selected}
      >
        <Styled.WrapperIcon>
          <Icon
            style={{
              color: selected ? 'white' : COLORS.gray700
            }}
            size='25px'
          />
        </Styled.WrapperIcon>

        <Styled.WrapperText>
          <Styled.TextItem
            fontWeight='bold'
            color={selected ? COLORS.white : COLORS.gray500}
            fontSize={selected ? 'regular' : 'small'}
          >
            {text}
          </Styled.TextItem>
        </Styled.WrapperText>
      </Styled.WrapperItemSidebar>
    );
  };

  return (
    <Styled.Container isOpen={sidebar.isOpen}>
      {SIDEBAR_OPTIONS.map(renderItemSidebar)}
    </Styled.Container>
  );
};

export default Sidebar;
