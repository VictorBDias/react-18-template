import { type APIResponse } from 'shared/interfaces/dtos/apiResponse.dto';

export interface IUpdateDTO<T> {
  id: number;
  data: Omit<T, 'id'>;
}

export type IUpdateAPI<T> = APIResponse<T>;
