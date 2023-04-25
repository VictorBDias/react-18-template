import { type APIStatus, useApiStatus } from 'shared/hooks/useApiStatus';
import { usePagination } from 'shared/hooks/usePagination';
import { type SetState } from 'shared/interfaces';

import {
  type ICreateAPI,
  type ICreateDTO,
  type IDestroyAPI,
  type IDestroyDTO,
  type IListAPI,
  type IListDTO,
  type IShowAPI,
  type IShowDTO,
  type IUpdateAPI,
  type IUpdateDTO,
} from '../interfaces';
import { useRepository } from '../repositories/implementations/repository';
import { useCreateController } from '../useCases/create/create.controller';
import { useDestroyController } from '../useCases/destroy/destroy.controller';
import { useListController } from '../useCases/list/list.controller';
import { useShowController } from '../useCases/show/show.controller';
import { useUpdateController } from '../useCases/update/update.controller';

interface IMethods<T> {
  list?: (data: IListDTO) => IListAPI<T>;
  create?: (data: ICreateDTO<T>) => ICreateAPI<T>;
  destroy?: (data: IDestroyDTO) => IDestroyAPI;
  update?: ({ id, data }: IUpdateDTO<T>) => IUpdateAPI<T>;
  show?: (data: IShowDTO) => IShowAPI<T>;
}

export interface useOperationsProps<T> extends IMethods<T> {
  state: T[];
  setState: SetState<T[]>;
  entity?: T;
  page: number;
  lastPage: number;
  status: APIStatus;
}

export const useOperations = <T>(
  methods: IMethods<T>
): useOperationsProps<T> => {
  const repository = useRepository<any>();
  const { list, create, show, update, destroy } = methods;
  const { changeStatus, status } = useApiStatus();
  const { page, lastPage, replacePagination } = usePagination();

  const listController = useListController({
    changeStatus,
    replacePagination,
    repository,
    api: list,
  });

  const createController = useCreateController({
    changeStatus,
    repository,
    api: create,
  });

  const destroyController = useDestroyController({
    changeStatus,
    repository,
    api: destroy,
  });

  const updateController = useUpdateController({
    changeStatus,
    repository,
    api: update,
  });

  const showController = useShowController({
    changeStatus,
    repository,
    api: show,
  });

  return {
    state: repository.state,
    setState: repository.setState,
    entity: repository.entity,
    page,
    lastPage,
    status,
    list: listController.handle,
    create: createController.handle,
    destroy: destroyController.handle,
    update: updateController.handle,
    show: showController.handle,
  };
};
