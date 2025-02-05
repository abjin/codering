import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../libs/constants';
import Layout from '../components/layouts/layout';
import Home from './home';
import Login from './login';
import ProtectedRoute from '../components/auth/protected-route';
import Logout from './logout';
import Projects from './projects';
import Feeds from './feeds';
import Studies from './studies';
import Conferences from './conferences';
import ChatRooms from './chatRooms';
import Chat from './chat';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <ProtectedRoute children={<Layout />} />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      { path: ROUTES.PROJECTS, element: <Projects /> },
      { path: ROUTES.FEEDS, element: <Feeds /> },
      { path: ROUTES.STUDIES, element: <Studies /> },
      { path: ROUTES.CONFERENCES, element: <Conferences /> },
      { path: ROUTES.CHAT_ROOMS, element: <ChatRooms /> },
      { path: '/*', element: <Home /> },
    ],
  },

  {
    path: ROUTES.CHAT,
    element: <ProtectedRoute children={<Chat />} />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTES.LOGOUT,
    element: <Logout />,
  },
]);
