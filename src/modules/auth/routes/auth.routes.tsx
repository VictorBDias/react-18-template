import { NestedComponent } from '../components/NestedComponent/NestedComponent';
import { Session } from '../screens/Session';
import { Test } from '../screens/Test';

export const authRoutes = [
  {
    path: '/session',
    element: <Session />,
    loader: () => <h1>Loading</h1>,
    children: [
      {
        path: 'create',
        element: (
          <NestedComponent>
            <h2>NestedComponent</h2>
            <p>This is a NestedComponent</p>
          </NestedComponent>
        ),
        loader: () => <h1>Loading</h1>,
      },
    ],
  },
  {
    path: '/test',
    element: <Test />,
    loader: () => <h1>Loading</h1>,
  },
];
