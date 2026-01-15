import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children, permission }) => {
  const { user, loading, hasPermission } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (permission && !hasPermission(permission)) {
    return <div>Access Denied</div>;
  }

  return children;
};

export default PrivateRoute;
