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
  srcImage?: string | undefined;
  name: string;
  email?: string | undefined;
}

const MiniProfile: React.FC<Props> = ({
  options,
  email,
  name,
  srcImage,
  ...propsContainer
}) => {
  return (
    <DropdownActions>
      <DropdownTrigger>
        <Styled.Container {...propsContainer}>
          {srcImage ? (
            <Styled.ImageProfile src={srcImage} />
          ) : (
            <Styled.WrapperLetterProfileImage>
              <Text fontSize='medium' fontWeight='regular' color={COLORS.white}>
                {name[0]}
              </Text>
            </Styled.WrapperLetterProfileImage>
          )}

          <Styled.WrapperInfo>
            <Text fontWeight='bold' fontSize='regular' color={COLORS.gray700}>
              {name}
            </Text>

            <Text
              style={{ fontSize: '0.8em' }}
              fontWeight='bold'
              color={COLORS.gray400}
            >
              {email}
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
