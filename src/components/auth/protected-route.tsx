import React from 'react';
import { Navigate } from 'react-router-dom';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useIsAuthenticated();
  if (isAuthenticated) return children;
  return <Navigate to="/login" />;
}

export default ProtectedRoute;
