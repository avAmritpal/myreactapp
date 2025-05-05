import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Create Context
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('authToken') || null);
  const navigate = useNavigate();

  let isLoggedIn = !!token;

  const login = (newToken) => {
    localStorage.setItem('authToken', newToken);
    setToken(newToken);
    navigate('/'); // Redirect to the home page
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    navigate('/login'); // Redirect to the login page
  };

  return (
    <AuthContext.Provider value={{isLoggedIn, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook for Using Auth
export const useAuth = () => {
  return useContext(AuthContext);
};
