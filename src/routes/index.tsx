import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layouts/layout';
import Home from './home';
import Login from './login.tsx';
import ProtectedRoute from '../components/auth/protected-route.tsx';
import Logout from './logout.tsx';
import Groups from './groups';
import Feeds from './feeds';
import Classes from './classes';
import Events from './events';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute children={<Layout />} />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/groups', element: <Groups /> },
      { path: '/feeds', element: <Feeds /> },
      { path: '/classes', element: <Classes /> },
      { path: '/events', element: <Events /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/logout',
    element: <Logout />,
  },
]);
