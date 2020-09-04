import React from 'react';

import Task from 'components/molecules/Task/Task';

import Text from 'components/atoms/Text/Text';

import * as Styled from './styles';

const Column = ({ data, index }) => {
  const { title, tasks } = data;

  return (
    <Styled.Container index={index}>
      <Styled.WrapperHeader>
        <Text size='medium' fontWeight='semiBold'>
          {title}
        </Text>

        <Styled.IconMoreOptions />
      </Styled.WrapperHeader>
      {tasks.map(task => (
        <Task data={task} />
      ))}
    </Styled.Container>
  );
};

export default Column;
