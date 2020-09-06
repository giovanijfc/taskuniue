import React from 'react';

import MiniProfile from 'components/molecules/MiniProfile/MiniProfile';

import Input from 'components/atoms/Input/Input';

import { SideBarType } from 'hooks/useSidebar';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

import * as Styled from './styles';

import DROPDOWN_OPTIONS_PROFILE from './DROPDOWN_OPTIONS_PROFILE';
import DROPDOWN_OPTIONS_PROJECT from './DROPDOWN_OPTIONS_PROJECT';

import { BiSearch } from 'react-icons/bi';

const profileMockedImage =
  'https://scontent.fcnf2-1.fna.fbcdn.net/v/t1.0-9/69070223_2313363825427410_1072069939260555264_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=Amvyg9YhesMAX_HYDOk&_nc_ht=scontent.fcnf2-1.fna&oh=c1dc7de74378fb8be48445c7906acc0c&oe=5F7A2409';

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

        <Styled.WrapperProfiles>
          <MiniProfile
            name='Taskuniue'
            options={DROPDOWN_OPTIONS_PROJECT}
            style={{ height: '60px', marginRight: '60px' }}
          />

          <MiniProfile
            name='Giovani Fonseca'
            email='giovanijfc@gmail.com'
            options={DROPDOWN_OPTIONS_PROFILE}
            srcImage={profileMockedImage}
            style={{ height: '60px' }}
          />
        </Styled.WrapperProfiles>
      </Styled.WrapperAround>
    </Styled.Container>
  );
};

export default Header;
