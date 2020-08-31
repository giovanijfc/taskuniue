import React from 'react';

import Text from 'components/atoms/Text/Text';

import * as Styled from './styles';

import { BOARDS } from './DEBUG_DATA';

const KanbanScreen = () => {
  return (
    <Styled.Container>
      <Text fontWeight='bold' size='extraHigh'>
        Kanban
      </Text>

      <Styled.WrapperBoardLine>
        {BOARDS.map((_, index) => (
          <Styled.WrapperBoard index={index}></Styled.WrapperBoard>
        ))}
      </Styled.WrapperBoardLine>
    </Styled.Container>
  );
};

export default KanbanScreen;
