import { useState, useCallback } from 'react';

export interface PaginationData {
  page: number;
  lastPage: number;
}

export type ReplacePaginationFunction = (
  paginationData: PaginationData
) => void;

export interface UsePaginationData extends PaginationData {
  increasePage: () => void;
  decreasePage: () => void;
  changePage: (newPage: number) => void;
  replacePagination: ReplacePaginationFunction;
}

export const usePagination = () => {
  const [pagination, setPagination] = useState<PaginationData>({
    page: 1,
    lastPage: 1,
  });

  const replacePagination = useCallback((paginationData: PaginationData) => {
    setPagination(paginationData);
  }, []);

  const increasePage = useCallback(() => {
    setPagination(oldPagination => ({
      ...oldPagination,
      page: oldPagination.page + 1,
    }));
  }, []);

  const decreasePage = useCallback(() => {
    setPagination(oldPagination => ({
      ...oldPagination,
      page: oldPagination.page - 1,
    }));
  }, []);

  const changePage = useCallback((newPage: number) => {
    setPagination(oldPagination => ({ ...oldPagination, page: newPage }));
  }, []);

  return {
    page: pagination.page,
    lastPage: pagination.lastPage,
    changePage,
    increasePage,
    decreasePage,
    replacePagination,
  };
};
