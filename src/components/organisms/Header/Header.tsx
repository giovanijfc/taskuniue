import React from 'react';

import MiniProfile from 'components/molecules/MiniProfile/MiniProfile';

import Input from 'components/atoms/Input/Input';

import { SideBarType } from 'hooks/useSidebar';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

import * as Styled from './styles';

import DROPDOWN_OPTIONS_PROFILE from './DROPDOWN_OPTIONS_PROFILE';

import { BiSearch } from 'react-icons/bi';

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

      <Styled.WrapperAround>
        <Input
          placeholder='Pesquise por...'
          fontSize='regular'
          fontWeight='regular'
          color={COLORS.gray800}
          placeholderColor={COLORS.gray500}
          IconLeft={
            <BiSearch
              style={{ paddingRight: SPACING.nano }}
              size='28px'
              color={COLORS.gray400}
            />
          }
          style={{ width: '28%', height: '36px' }}
        />

        <MiniProfile
          options={DROPDOWN_OPTIONS_PROFILE}
          style={{ height: '60px', alignSelf: 'center' }}
        />
      </Styled.WrapperAround>
    </Styled.Container>
  );
};

export default Header;
