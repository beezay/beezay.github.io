import { frontendRoutes } from "core/consts/frontendRoutes";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedAppRoute = ({
  // user,
  redirectPath = frontendRoutes.urlLogin,
  children,
  isAuth,
}) => {
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedAppRoute;
