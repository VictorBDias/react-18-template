import { useCallback } from 'react';
import { getAPIPagination } from 'utils/apis/getAPIPagination';
import { getListAPIStatus } from 'utils/apis/getListAPIStatus';

import { type APIStatus } from 'shared/hooks/useApiStatus';
import { type ReplacePaginationFunction } from 'shared/hooks/usePagination';
import { type IListAPI, type IListDTO } from 'shared/operations/interfaces';
import { type IRepository } from 'shared/operations/repositories/IRepository';

import { useListUseCase } from './list.useCase';

interface UseListController<T> {
  changeStatus: (status: APIStatus) => void;
  repository: IRepository<T>;
  replacePagination: ReplacePaginationFunction;
  api?: (data: IListDTO) => IListAPI<T>;
}

export const useListController = <T>({
  repository,
  changeStatus,
  replacePagination,
  api,
}: UseListController<T>) => {
  const { execute } = useListUseCase<T>(repository);

  const handle = useCallback(
    async (data: IListDTO) => {
      const { page, search } = data;
      try {
        changeStatus(getListAPIStatus(page, search));
        const response = await execute({ data, api });

        if (response) {
          const { meta } = response.data;

          replacePagination(getAPIPagination(meta));

          changeStatus('success');
        }

        return response;
      } catch (err) {
        changeStatus('error');
        return await ({} as IListAPI<T>);
      }
    },
    [api, changeStatus, execute, replacePagination]
  );

  return { handle };
};
