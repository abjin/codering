import { Navigate } from 'react-router-dom';
import useSignOut from 'react-auth-kit/hooks/useSignOut';

export default function Logout() {
  useSignOut()();
  return <Navigate to="/login" />;
}
