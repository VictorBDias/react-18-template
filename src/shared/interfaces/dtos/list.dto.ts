import { type APIResponse } from './apiResponse.dto';
import { type IPaginationAPI, type IPaginationDTO } from './pagination.dtos';

export type IListAPI<T> = APIResponse<{
  data: T[];
  meta: IPaginationAPI;
}>;

export type IListDTO = IPaginationDTO & {
  search?: string;
  menuItemId?: number | string;
  isMounted?: boolean;
  productIds?: number[];
  categoryId?: number;
};
