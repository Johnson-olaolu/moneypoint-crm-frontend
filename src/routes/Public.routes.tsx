import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = ({ location }: { location?: any }): JSX.Element => {
  const isAuthenticated = false;
  return !isAuthenticated ? <Outlet /> : <Navigate to="/dashboard" state={ {from : location}} />;
};

export default PublicRoutes;
