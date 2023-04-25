import { type APIResponse } from 'shared/interfaces/dtos/apiResponse.dto';

export interface IShowDTO {
  id: number;
}

export type IShowAPI<T> = APIResponse<T>;
