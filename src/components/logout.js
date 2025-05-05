import React from 'react';
import { useAuth } from '../services/AuthProvider';
import { Navigate } from 'react-router-dom';

const Logout = () => {
  const { logout } = useAuth();

  return <Navigate to="/login"></Navigate>
};

export default Logout;