import { useCallback } from 'react';

import { type APIStatus } from 'shared/hooks/useApiStatus';
import { type ICreateAPI, type ICreateDTO } from 'shared/operations/interfaces';
import { type IRepository } from 'shared/operations/repositories/IRepository';

import { useCreateUseCase } from './create.useCase';

interface UseCreateController<T> {
  changeStatus: (status: APIStatus) => void;
  repository: IRepository<T>;
  api?: (data: ICreateDTO<T>) => ICreateAPI<T>;
}

export const useCreateController = <T>({
  changeStatus,
  repository,
  api,
}: UseCreateController<T>) => {
  const { execute } = useCreateUseCase<T>(repository);

  const handle = useCallback(
    async (data: ICreateDTO<T>) => {
      try {
        const response = await execute({ data, api });

        changeStatus('success');

        return response;
      } catch (err) {
        changeStatus('error');
        return await ({} as ICreateAPI<T>);
      }
    },
    [api, changeStatus, execute]
  );

  return { handle };
};
