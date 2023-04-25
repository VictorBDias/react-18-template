import { useState, useCallback } from 'react';

type APIStatus =
  | 'pending'
  | 'paging'
  | 'idle'
  | 'searching'
  | 'error'
  | 'success'
  | 'creating'
  | 'deleting'
  | 'updating'
  | 'showing'
  | 'listSuccess'
  | 'createSuccess'
  | 'deleteSuccess'
  | 'updateSuccess'
  | 'showSuccess'
  | 'ordering'
  | 'orderingSuccess';

export type ChangeStatusFunction = (newStatus: APIStatus) => void;

interface UseApiStatusData {
  status: APIStatus;
  changeStatus: ChangeStatusFunction;
}

const useApiStatus = () => {
  //* STATES
  const [status, setStatus] = useState<APIStatus>('idle');
  const [error, setError] = useState<string | undefined>(undefined);

  //* FUNCTIONS
  const changeStatus = useCallback((newStatus: APIStatus) => {
    setStatus(newStatus);
  }, []);

  return {
    error,
    status,
    setError,
    changeStatus,
  };
};

export { useApiStatus, type UseApiStatusData, type APIStatus };
