import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layouts/layout';
import Home from './home';
import Challenge from './challenge';
import Login from './login.tsx';
import ProtectedRoute from '../components/auth/protected-route.tsx';
import Logout from './logout.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute children={<Layout />} />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/challenge', element: <Challenge /> },
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
