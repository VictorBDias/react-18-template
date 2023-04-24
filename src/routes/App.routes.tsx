import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { authRoutes } from 'modules/auth/routes/auth.routes';

export const Routes = () => {
  const routes = [...authRoutes];

  const router = createBrowserRouter(routes, {
    future: {
      v7_normalizeFormMethod: true,
    },
  });

  return <RouterProvider router={router} />;
};
