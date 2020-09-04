import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Column from 'components/molecules/Column/Column';
import Task from 'components/molecules/Task/Task';

import Text from 'components/atoms/Text/Text';
import Button from 'components/atoms/Button/Button';

import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

import * as Styled from './styles';

import { BOARDS as columns } from './DEBUG_DATA';

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

      <DragDropContext onDragEnd={result => console.log(result)}>
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
