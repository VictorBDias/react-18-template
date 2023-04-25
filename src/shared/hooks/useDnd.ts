import { type DropResult } from 'react-beautiful-dnd';

import { type SetState } from 'shared/interfaces/ISetState';

export interface ReorderParams {
  categoryId: number;
  previousId: number;
  nextId: number;
}

export interface IHandleDrag {
  state: any;
  setState: SetState<any>;
  result: DropResult;
  onDragFinish: (value: ReorderParams) => void;
}

export const useDnd = () => {
  const reorder = (list: object[], startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const getPreviousId = (
    state: any[],
    sourceIndex: number,
    destinationIndex: number
  ) => {
    if (destinationIndex === 0) return null;

    if (sourceIndex < destinationIndex) return state[destinationIndex].id;

    return state[destinationIndex - 1].id;
  };

  const getNextId = (
    state: any[],
    sourceIndex: number,
    destinationIndex: number
  ) => {
    if (destinationIndex === state.length - 1) return null;

    if (sourceIndex < destinationIndex) return state[destinationIndex].id;

    return state[destinationIndex + 1].id;
  };

  const handleOnDragEnd = ({
    state,
    setState,
    result,
    onDragFinish,
  }: IHandleDrag) => {
    if (result.destination) {
      const sourceIndex = result.source.index;
      const destinationIndex = result.destination.index;
      const items = reorder(state, sourceIndex, destinationIndex);

      setState(items);

      const currentItemId = state[sourceIndex].id;
      const prevItemId = getPreviousId(state, sourceIndex, destinationIndex);
      const nextItemId = getNextId(state, sourceIndex, destinationIndex);

      onDragFinish({
        categoryId: currentItemId,
        previousId: prevItemId,
        nextId: nextItemId,
      });
    }
  };

  return { handleOnDragEnd };
};
