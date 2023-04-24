import { Outlet } from 'react-router-dom';

import { useSessionsNavigation } from '../routes/auth.navigations';

export const Test = () => {
  const { navigateToSession } = useSessionsNavigation();

  return (
    <>
      <h1>Test</h1>
      <button onClick={navigateToSession}>Navigation button</button>
      <Outlet />
    </>
  );
};
