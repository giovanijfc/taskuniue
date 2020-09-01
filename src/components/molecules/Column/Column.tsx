import React from 'react';

import Task from 'components/molecules/Task/Task';

import Text from 'components/atoms/Text/Text';

import * as Styled from './styles';

const Column = ({ item }) => {
  const { title } = item;

  return (
    <Styled.Container index={item.index}>
      <Styled.WrapperHeader>
        <Text size='medium' fontWeight='semiBold'>
          {title}
        </Text>

        <Styled.IconMoreOptions />
      </Styled.WrapperHeader>

      <Task />
    </Styled.Container>
  );
};

export default Column;
