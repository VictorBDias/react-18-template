import { useCallback } from 'react';

import { type APIStatus } from 'shared/hooks/useApiStatus';
import {
  type IDestroyAPI,
  type IDestroyDTO,
} from 'shared/operations/interfaces';
import { type IRepository } from 'shared/operations/repositories/IRepository';

import { useDestroyUseCase } from './destroy.useCase';

interface UseDestroyController<T> {
  changeStatus: (status: APIStatus) => void;
  repository: IRepository<T>;
  api?: (data: IDestroyDTO) => IDestroyAPI;
}

export const useDestroyController = <T>({
  repository,
  changeStatus,
  api,
}: UseDestroyController<T>) => {
  const { execute } = useDestroyUseCase(repository);

  const handle = useCallback(
    async ({ id, productIds }: IDestroyDTO) => {
      try {
        changeStatus('success');

        const response = await execute({ id, productIds, api });

        return response;
      } catch (err) {
        changeStatus('error');

        return await ({} as IDestroyAPI);
      }
    },
    [api, changeStatus, execute]
  );

  return { handle };
};
