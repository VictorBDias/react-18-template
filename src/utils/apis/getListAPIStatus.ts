import { type APIStatus } from 'shared/hooks/useApiStatus';

export const getListAPIStatus = (page: number, search?: string): APIStatus => {
  if (page > 1) return 'paging';

  if (search) return 'searching';

  return 'pending';
};
