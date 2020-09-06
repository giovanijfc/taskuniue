import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Column from 'components/molecules/Column/Column';
import Task from 'components/molecules/Task/Task';

import Text from 'components/atoms/Text/Text';
import LabelButton from 'components/atoms/LabelButton/LabelButton';

import useKanban from 'hooks/useKanban';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

import * as Styled from './styles';

import { COLUMNS } from './DEBUG_DATA';

import { IoIosAdd } from 'react-icons/io';

const KanbanScreen = () => {
  const [columns, setColumns] = useState(COLUMNS);

  const { onDragEnd } = useKanban(columns, setColumns);

  return (
    <Styled.Container>
      <Styled.WrapperHeader>
        <Text fontWeight='bold' fontSize='extraHigh'>
          Kanban
        </Text>

        <Styled.WrapperButtonsOptions>
          <LabelButton
            style={{ marginRight: SPACING.default }}
            hoverBackgroundColor={COLORS.primaryHover}
            backgroundColor={COLORS.primary}
            label='Adicionar coluna'
          >
            <IoIosAdd size='32px' color={COLORS.white} />
          </LabelButton>

          <LabelButton
            hoverBackgroundColor={COLORS.primaryHover}
            backgroundColor={COLORS.primary}
            label='Adicionar tarefa'
          >
            <IoIosAdd size='32px' color={COLORS.white} />
          </LabelButton>
        </Styled.WrapperButtonsOptions>
      </Styled.WrapperHeader>

      <DragDropContext onDragEnd={onDragEnd}>
        <Styled.WrapperColumns>
          {columns.map((column, index) => (
            <Droppable droppableId={JSON.stringify(column.id)}>
              {(provided, snapshot) => (
                <div key={column.id} ref={provided.innerRef}>
                  <Column
                    draggingOver={snapshot.isDraggingOver}
                    data={column}
                    index={index}
                  >
                    {column.tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={JSON.stringify(task.id)}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            style={provided.draggableProps.style}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Task
                              isDragging={snapshot.isDragging}
                              data={task}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  </Column>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </Styled.WrapperColumns>
      </DragDropContext>
    </Styled.Container>
  );
};

export default KanbanScreen;
