import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedLogin = ({ children }) => {
  if (localStorage.getItem("userID")) {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default ProtectedLogin;
