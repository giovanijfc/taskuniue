import React from 'react';

import Task from 'components/molecules/Task/Task';

import Text from 'components/atoms/Text/Text';

import * as Styled from './styles';

const Column = ({ data, index, children, draggingOver }) => {
  const { title } = data;

  return (
    <Styled.Container draggingOver={draggingOver} index={index}>
      <Styled.WrapperHeader>
        <Text size='medium' fontWeight='semiBold'>
          {title}
        </Text>

        <Styled.IconMoreOptions />
      </Styled.WrapperHeader>
      {children}
    </Styled.Container>
  );
};

export default Column;
