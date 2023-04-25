import { useCallback } from 'react';

import { type IShowAPI, type IShowDTO } from 'shared/operations/interfaces';
import { type IRepository } from 'shared/operations/repositories/IRepository';

export const useShowUseCase = <T>({ setEntity }: IRepository<T>) => {
  const execute = useCallback(
    async ({
      id,
      api,
    }: {
      id: number;
      api?: (data: IShowDTO) => IShowAPI<T>;
    }) => {
      if (api) {
        const response = await api({ id });

        setEntity(response.data);

        return response;
      }
      return await ({} as IShowAPI<T>);
    },
    [setEntity]
  );

  return { execute };
};
