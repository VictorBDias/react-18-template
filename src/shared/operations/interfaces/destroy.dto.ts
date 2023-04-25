import { type APIResponse } from 'shared/interfaces/dtos/apiResponse.dto';

export interface IDestroyDTO {
  id: number;
  productIds: number[];
}

export type IDestroyAPI = APIResponse<void>;
