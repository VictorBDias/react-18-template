import { useCallback } from 'react';

import { type APIStatus } from 'shared/hooks/useApiStatus';
import { type IShowAPI, type IShowDTO } from 'shared/operations/interfaces';
import { type IRepository } from 'shared/operations/repositories/IRepository';

import { useShowUseCase } from './show.useCase';

interface UseShowController<T> {
  changeStatus: (status: APIStatus) => void;
  repository: IRepository<T>;
  api?: (data: IShowDTO) => IShowAPI<T>;
}

export const useShowController = <T>({
  repository,
  changeStatus,
  api,
}: UseShowController<T>) => {
  const { execute } = useShowUseCase<T>(repository);

  const handle = useCallback(
    async ({ id }: IShowDTO) => {
      try {
        changeStatus('success');

        const response = await execute({ id, api });

        return response;
      } catch (err) {
        changeStatus('error');

        return await ({} as IShowAPI<T>);
      }
    },
    [api, changeStatus, execute]
  );

  return { handle };
};
