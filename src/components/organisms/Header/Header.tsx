import React from 'react';

import { SideBarType } from 'hooks/useSidebar';

import * as Styled from './styles';

const Header: React.FC<SideBarType> = sidebar => {
  const onClickExpandedMenuHandler = (): void => {
    if (sidebar.isOpen) return sidebar.close();

    sidebar.open();
  };

  return (
    <Styled.Container>
      <Styled.WrapperOptionMenu>
        <Styled.MenuIcon
          isOpen={sidebar.isOpen}
          onClick={onClickExpandedMenuHandler}
        />
        <Styled.StyledTextMenu>Menu</Styled.StyledTextMenu>
      </Styled.WrapperOptionMenu>
    </Styled.Container>
  );
};

export default Header;
