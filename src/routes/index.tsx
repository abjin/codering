import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layouts/layout';
import Home from './home';
import Login from './login';
import ProtectedRoute from '../components/auth/protected-route';
import Logout from './logout';
import Projects from './projects';
import Feeds from './feeds';
import Studies from './studies';
import Events from './events';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute children={<Layout />} />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Projects /> },
      { path: '/feeds', element: <Feeds /> },
      { path: '/studies', element: <Studies /> },
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
