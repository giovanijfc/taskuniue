import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Text from 'components/atoms/Text/Text';

import COLORS from 'styles/guide/COLORS';

import * as Styled from './styles';

import SIDEBAR_OPTIONS from './SIDEBAR_OPTIONS';

const Sidebar: React.FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const onClickOptionSidebarHandler = route => {
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
          <Text
            bold
            color={selected ? COLORS.white : COLORS.gray500}
            style={{ fontSize: selected ? '1.05em' : '0.9em' }}
          >
            {text}
          </Text>
        </Styled.WrapperText>
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
