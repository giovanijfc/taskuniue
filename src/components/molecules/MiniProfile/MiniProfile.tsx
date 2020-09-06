import React from 'react';

import DropdownActions from 'components/molecules/DropdownActions/DropdownActions';
import DropdownTrigger from 'components/molecules/DropdownActions/DropdownTrigger';
import DropdownActionsOptions from 'components/molecules/DropdownActions/DropdownActionsOptions';

import Text from 'components/atoms/Text/Text';

import COLORS from 'styles/guides/colors';

import { OptionsDropdownActionsType } from 'components/molecules/DropdownActions/DropdownActionsOptions';

import * as Styled from './styles';

interface Props {
  style?: React.CSSProperties | undefined;
  options?: Array<OptionsDropdownActionsType> | undefined;
}

const profileMockedImage =
  'https://scontent.fcnf2-1.fna.fbcdn.net/v/t1.0-9/69070223_2313363825427410_1072069939260555264_n.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=Amvyg9YhesMAX_HYDOk&_nc_ht=scontent.fcnf2-1.fna&oh=c1dc7de74378fb8be48445c7906acc0c&oe=5F7A2409';

const MiniProfile: React.FC<Props> = ({ options, ...propsContainer }) => {
  return (
    <DropdownActions>
      <DropdownTrigger>
        <Styled.Container {...propsContainer}>
          <Styled.ImageProfile src={profileMockedImage} />

          <Styled.WrapperInfo>
            <Text fontWeight='bold' fontSize='regular' color={COLORS.gray700}>
              Giovani Fonseca
            </Text>

            <Text
              style={{ fontSize: '0.8em' }}
              fontWeight='bold'
              color={COLORS.gray400}
            >
              giovanijfc@gmail.com
            </Text>
          </Styled.WrapperInfo>
        </Styled.Container>
      </DropdownTrigger>

      {options && (
        <DropdownActionsOptions
          handleClick={id => console.log(id)}
          options={options}
        />
      )}
    </DropdownActions>
  );
};

export default MiniProfile;
