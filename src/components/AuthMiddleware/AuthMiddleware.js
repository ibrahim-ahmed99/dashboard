import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthMiddleware = ({ children }) => {
  // Check if the user is logged in by reading is_login from localStorage
  const Navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('is_login') === 'true';

  if (!isLoggedIn) {
    // Redirect to the login page if the user is not logged in
    Navigate("/login");   
  }

  return children; // Render protected routes if logged in
};

export default AuthMiddleware;