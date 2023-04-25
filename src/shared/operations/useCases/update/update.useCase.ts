import { useCallback } from 'react';

import { type IUpdateAPI, type IUpdateDTO } from 'shared/operations/interfaces';
import { type IRepository } from 'shared/operations/repositories/IRepository';

export const useUpdateUseCase = <T>({ update }: IRepository<T>) => {
  const execute = useCallback(
    async ({
      id,
      data,
      api,
    }: {
      id: number;
      data: Omit<T, 'id'>;
      api?: ({ id, data }: IUpdateDTO<T>) => IUpdateAPI<T>;
    }) => {
      if (api) {
        const response = await api({ id, data });

        update(id, response.data);

        return response;
      }
      return await ({} as IUpdateAPI<T>);
    },
    [update]
  );

  return { execute };
};
