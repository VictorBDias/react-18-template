import { useCallback } from 'react';

import { type ICreateAPI, type ICreateDTO } from 'shared/operations/interfaces';
import { type IRepository } from 'shared/operations/repositories/IRepository';

export const useCreateUseCase = <T>({ create }: IRepository<T>) => {
  const execute = useCallback(
    async ({
      data,
      api,
    }: {
      data: ICreateDTO<T>;
      api?: (data: ICreateDTO<T>) => ICreateAPI<T>;
    }) => {
      if (api) {
        const response = await api(data);

        create(response.data);

        return response;
      }
      return await ({} as ICreateAPI<T>);
    },
    [create]
  );

  return { execute };
};
