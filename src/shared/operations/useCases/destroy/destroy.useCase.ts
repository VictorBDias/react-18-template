import { useCallback } from 'react';

import {
  type IDestroyAPI,
  type IDestroyDTO,
} from 'shared/operations/interfaces';
import { type IRepository } from 'shared/operations/repositories/IRepository';

export const useDestroyUseCase = <T>({ destroy }: IRepository<T>) => {
  const execute = useCallback(
    async ({
      id,
      productIds,
      api,
    }: {
      id: number;
      productIds: number[];
      api?: (data: IDestroyDTO) => IDestroyAPI;
    }) => {
      if (api) {
        const response = await api({ id, productIds });

        destroy(id);

        return response;
      }
      return await ({} as IDestroyAPI);
    },
    [destroy]
  );

  return { execute };
};
