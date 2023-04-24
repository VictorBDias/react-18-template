import { useNavigate } from 'react-router-dom';

export const useSessionsNavigation = () => {
  const navigate = useNavigate();

  const navigateToSession = () => {
    navigate('/session', { replace: true });
  };

  const navigateToCreate = () => {
    navigate('create');
  };

  const navigateToTest = () => {
    navigate('/test', { replace: true });
  };

  return { navigateToSession, navigateToTest, navigateToCreate };
};
