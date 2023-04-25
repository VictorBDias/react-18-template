import { useCallback } from 'react';

import { type APIStatus } from 'shared/hooks/useApiStatus';
import { type IUpdateAPI, type IUpdateDTO } from 'shared/operations/interfaces';
import { type IRepository } from 'shared/operations/repositories/IRepository';

import { useUpdateUseCase } from './update.useCase';

interface UseUpdateController<T> {
  changeStatus: (status: APIStatus) => void;
  repository: IRepository<T>;
  api?: ({ id, data }: IUpdateDTO<T>) => IUpdateAPI<T>;
}

export const useUpdateController = <T>({
  repository,
  changeStatus,
  api,
}: UseUpdateController<T>) => {
  const { execute } = useUpdateUseCase(repository);

  const handle = useCallback(
    async ({ id, data }: IUpdateDTO<T>) => {
      try {
        changeStatus('success');

        const response = await execute({ id, data, api });

        return response;
      } catch (err) {
        changeStatus('error');

        return await ({} as IUpdateAPI<T>);
      }
    },
    [api, changeStatus, execute]
  );

  return { handle };
};
