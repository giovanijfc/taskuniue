import { useCallback } from 'react';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  console.log(result);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(1, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

export default function useKanban(columns, setColumns) {
  const selectorColumnById = useCallback(
    idToSelect => {
      return columns.find(({ id }) => String(id) === String(idToSelect));
    },
    [columns]
  );

  const onDragEnd = useCallback(
    result => {
      const { source, destination } = result;

      if (!destination) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        const columnToDroppable = selectorColumnById(destination.droppableId);
        const tasks = reorder(
          columnToDroppable.tasks,
          source.index,
          destination.index
        );

        setColumns(prevColumns =>
          prevColumns.map(column => {
            if (String(source.droppableId) === String(column.id)) {
              return {
                ...column,
                tasks
              };
            }

            return column;
          })
        );
      } else {
        const columnFromDragging = selectorColumnById(source.droppableId);
        const columnToDroppable = selectorColumnById(destination.droppableId);

        const tasksResult = move(
          columnFromDragging.tasks,
          columnToDroppable.tasks,
          source,
          destination
        );

        setColumns(prevColumns =>
          prevColumns.map(column => {
            if (String(source.droppableId) === String(column.id)) {
              return {
                ...column,
                tasks: tasksResult[source.droppableId]
              };
            }

            if (String(destination.droppableId) === String(column.id)) {
              return {
                ...column,
                tasks: tasksResult[destination.droppableId]
              };
            }

            return column;
          })
        );
      }
    },
    [selectorColumnById, setColumns]
  );

  return { onDragEnd };
}
