// src/context/AuthContext.js
import React, { createContext, useState, useContext, useMemo } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // useMemo prevents the value object from being recreated on every render,
  // which can prevent unnecessary re-renders of consuming components.
  const value = useMemo(() => ({ user, setUser }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    // This error will be thrown if a component tries to use the context
    // without being wrapped in the AuthProvider.
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};