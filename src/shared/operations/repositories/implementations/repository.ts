import { useState } from 'react';

import { useSideEffects } from 'shared/hooks/useSideEffects';

import { type IRepository } from '../IRepository';

interface State {
  id: string | number;
}

export const useRepository = <T extends State>(): IRepository<T> => {
  const [data, setData] = useState<T[]>([]);
  const [entity, setEntity] = useState<T>();
  const { append, appendList, create, destroy, replaceList, update } =
    useSideEffects<T>(setData);

  return {
    state: data,
    setState: setData,
    entity,
    setEntity,
    append,
    appendList,
    create,
    destroy,
    replaceList,
    update,
  };
};
