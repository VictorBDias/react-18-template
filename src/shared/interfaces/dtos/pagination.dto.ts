export interface IPaginationAPI {
  total: string;
  perPage: number;
  page: number;
  lastPage: number;
}

export interface PaginationResponse {
  lastPage: number;
  page: number;
  perPage: number;
  total: string;
}
