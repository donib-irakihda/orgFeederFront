import { Navigate } from "react-router-dom";

const ProtectedLogin = ({ children }) => {
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedLogin;
