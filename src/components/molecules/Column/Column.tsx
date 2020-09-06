import React from 'react';

import DropdownActions from 'components/molecules/DropdownActions/DropdownActions';
import DropdownTrigger from 'components/molecules/DropdownActions/DropdownTrigger';
import DropdownActionsOptions from 'components/molecules/DropdownActions/DropdownActionsOptions';

import Text from 'components/atoms/Text/Text';

import * as Styled from './styles';

import DROPDOWN_OPTIONS from './DROPDOWN_OPTIONS';

const Column = ({ data, index, children, draggingOver }) => {
  const { title } = data;

  return (
    <Styled.Container draggingOver={draggingOver} index={index}>
      <Styled.WrapperHeader>
        <Text fontSize='medium' fontWeight='semiBold'>
          {title}
        </Text>

        <DropdownActions>
          <DropdownTrigger>
            <Styled.IconMoreOptions />
          </DropdownTrigger>

          <DropdownActionsOptions
            style={{ marginTop: '-10px' }}
            handleClick={id => console.log(id)}
            options={DROPDOWN_OPTIONS}
          />
        </DropdownActions>
      </Styled.WrapperHeader>
      {children}
    </Styled.Container>
  );
};

export default Column;
