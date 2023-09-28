import { Route, Redirect, Navigate, Outlet } from "react-router";
import { useIsAuth } from "../../hooks/useIsAuth.tsx";
import { useEffect, useState } from 'react';

const ProtectedRoute = ({ isAuth, Component }) => {
  console.log(isAuth, Component);
  return isAuth ? <Component /> : <Navigate to="/admin" />;
};

export default ProtectedRoute;