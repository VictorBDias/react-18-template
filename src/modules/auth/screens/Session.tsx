import { Outlet } from 'react-router-dom';

import { Typography } from 'shared/components/atoms/Typography';

import { useSessionsNavigation } from '../routes/auth.navigations';

export const Session = () => {
  const { navigateToTest, navigateToCreate } = useSessionsNavigation();
  return (
    <>
      <Typography variant="title">Session</Typography>
      <button onClick={navigateToTest}>Navigation button</button>
      <button onClick={navigateToCreate}>Open nested component</button>
      <Outlet />
    </>
  );
};
