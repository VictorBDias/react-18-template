export interface IPaginationDTO {
  page: number;
  perPage?: number;
  search?: string;
  isMounted?: boolean;
}

export interface IPaginationAPI {
  current_page: number;
  last_page: number;
  total?: number;
}
