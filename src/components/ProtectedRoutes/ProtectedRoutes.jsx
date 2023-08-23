import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoutes() {
  const userInfo = useSelector((state) => state.login.user);
  return userInfo ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;
