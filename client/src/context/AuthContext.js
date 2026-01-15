import React, { createContext, useState, useEffect } from 'react';
import { getCurrentUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
    setLoading(false);
  }, []);

  const hasPermission = (permission) => {
    return user?.permissions?.includes(permission);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loading, hasPermission }}>
      {children}
    </AuthContext.Provider>
  );
};
