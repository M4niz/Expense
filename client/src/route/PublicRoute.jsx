import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useGlobalContext from '../config/GlobalStateContext';

const PublicRoute = ({children}) => {
  const {authLoading, userLoggedIn } = useGlobalContext();
    if (true) {
      return <Outlet />
    }
  
    // 3. Logged in → allow access
    return <>{children}</>;


};

export default PublicRoute;
