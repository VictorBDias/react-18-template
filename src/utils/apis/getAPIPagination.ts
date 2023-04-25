import { type PaginationData } from 'shared/hooks/usePagination';
import { type IPaginationAPI } from 'shared/interfaces/dtos/pagination.dtos';

export const getAPIPagination = (meta: IPaginationAPI): PaginationData => ({
  page: meta.current_page,
  lastPage: meta.last_page,
});
