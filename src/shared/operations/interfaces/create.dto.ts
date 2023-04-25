import { type APIResponse } from 'shared/interfaces/dtos/apiResponse.dto';

export interface ICreateDTO<T> {
  data: Omit<T, 'id'>;
}

export type ICreateAPI<T> = APIResponse<T>;
