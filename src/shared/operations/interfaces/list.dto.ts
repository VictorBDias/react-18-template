import { type APIResponse } from 'shared/interfaces/dtos/apiResponse.dto';
import {
  type IPaginationAPI,
  type IPaginationDTO,
} from 'shared/interfaces/dtos/pagination.dtos';

export type IListDTO = IPaginationDTO & {
  menuItemId?: number | string;
  categoryId?: number;
  ignoreEvent?: boolean;
  tagIds?: number[];
  productIds?: number[];
  onlyInOne?: boolean;
};

export type IListAPI<T> = APIResponse<{
  meta: IPaginationAPI;
  data: T[];
}>;
