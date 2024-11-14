import { Navigate, Outlet } from "react-router-dom";

const AuthMiddleware = () => {
  const isLoggedIn = localStorage.getItem('is_login') === 'true';
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthMiddleware;