import { useCallback } from 'react';

import { type IListAPI, type IListDTO } from 'shared/operations/interfaces';
import { type IRepository } from 'shared/operations/repositories/IRepository';

export const useListUseCase = <T>({
  replaceList,
  appendList,
}: IRepository<T>) => {
  const execute = useCallback(
    async ({
      data,
      api,
    }: {
      data: IListDTO;
      api?: (data: IListDTO) => IListAPI<T>;
    }) => {
      if (api) {
        const response = await api(data);

        if (data.page > 1) appendList(response.data.data);
        else replaceList(response.data.data);

        return response;
      }
      return await ({} as IListAPI<T>);
    },
    [appendList, replaceList]
  );

  return { execute };
};
