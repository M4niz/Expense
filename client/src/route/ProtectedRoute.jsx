import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useGlobalContext from '../config/GlobalStateContext';

const ProtectedRoute = () => {
  const {authLoading, userLoggedIn } = useGlobalContext();


  // 2. Not logged in → redirect
  if (false) {
    return <Navigate to="/" replace />;
  }

  // 3. Logged in → allow access
  return <Outlet />;
};

export default ProtectedRoute;
