import { useCallback, type Dispatch, type SetStateAction } from 'react';

interface State {
  id: string | number;
}

const useSideEffects = <T extends State>(
  setState: Dispatch<SetStateAction<T[]>>
) => {
  const orderOne = useCallback(
    (id: number | string, order: number) => {
      setState(oldState => {
        const foundIndex = oldState.findIndex(oldState => oldState.id === id);

        if (foundIndex !== -1) {
          const filterdArray = oldState.filter(oldState => oldState.id !== id);
          filterdArray.splice(order, 0, oldState[foundIndex]);
          return filterdArray;
        }

        return [...oldState];
      });
    },
    [setState]
  );

  const create = useCallback(
    (state: any) => {
      setState((oldState: T[]) => [state, ...oldState]);
    },
    [setState]
  );

  const append = useCallback(
    (state: any) => {
      setState((oldState: T[]) => [...oldState, state]);
    },
    [setState]
  );

  const update = useCallback(
    (id: number | string, state: T) => {
      setState(oldState => {
        const foundIndex = oldState.findIndex(oldState => oldState.id === id);

        if (foundIndex !== -1) oldState[foundIndex] = state;

        return [...oldState];
      });
    },
    [setState]
  );

  const destroy = useCallback(
    (id: number | string) => {
      setState(oldState => oldState.filter(oldState => oldState.id !== id));
    },
    [setState]
  );

  const replaceList = useCallback(
    (list: T[]) => {
      setState(list);
    },
    [setState]
  );

  const appendList = useCallback(
    (list: T[]) => {
      setState(oldState => [...oldState, ...list]);
    },
    [setState]
  );

  return {
    create,
    append,
    update,
    destroy,
    replaceList,
    appendList,
    orderOne,
  };
};

export { useSideEffects };
