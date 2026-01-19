import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useGlobalContext from '../config/GlobalStateContext';

const PublicRoute = () => {
  const {authLoading, userLoggedIn } = useGlobalContext();


};

export default PublicRoute;
