import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({location} : {location? : any}) : JSX.Element => {
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={ { from : location }} />;
};

export default PrivateRoutes;
