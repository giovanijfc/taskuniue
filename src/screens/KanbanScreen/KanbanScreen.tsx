import React from 'react';

import Text from 'components/atoms/Text/Text';
import Button from 'components/atoms/Button/Button';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

import * as Styled from './styles';

import { BOARDS } from './DEBUG_DATA';

import { IoIosAdd } from 'react-icons/io';

const KanbanScreen = () => {
  return (
    <Styled.Container>
      <Styled.WrapperHeader>
        <Text fontWeight='bold' size='extraHigh'>
          Kanban
        </Text>

        <Styled.WrapperButtonAddTask>
          <Text
            style={{ marginRight: SPACING.high }}
            fontWeight='medium'
            size='regular'
            color={COLORS.gray600}
          >
            Criar tarefa
          </Text>
          <Button
            hoverBackgroundColor={COLORS.primaryHover}
            backgroundColor={COLORS.primary}
          >
            <IoIosAdd size='32px' color={COLORS.white} />
          </Button>
        </Styled.WrapperButtonAddTask>
      </Styled.WrapperHeader>

      <Styled.WrapperBoardLine>
        {BOARDS.map((_, index) => (
          <Styled.WrapperBoard index={index}></Styled.WrapperBoard>
        ))}
      </Styled.WrapperBoardLine>
    </Styled.Container>
  );
};

export default KanbanScreen;
