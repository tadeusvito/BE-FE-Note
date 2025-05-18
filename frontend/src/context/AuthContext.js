import React, { createContext, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authError, setAuthError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const register = async (email, username, password) => {
    setAuthError('');
    try {
      const res = await axios.post(`${BASE_URL}/register`, { email, username, password });
      if (res.data.status === 'Success') {
        return true;
      } else {
        setAuthError(res.data.message || 'Registrasi gagal');
        return false;
      }
    } catch (err) {
      setAuthError(err.response?.data?.message || 'Registrasi gagal');
      return false;
    }
  };

  const login = async (email, password) => {
    setAuthError('');
    try {
      const res = await axios.post(`${BASE_URL}/login`, { email, password }, { withCredentials: true });
      if (res.data.status === 'Success') {
        setIsAuthenticated(true);
        return true;
      } else {
        setAuthError(res.data.message || 'Login gagal');
        return false;
      }
    } catch (err) {
      setAuthError(err.response?.data?.message || 'Login gagal');
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.get(`${BASE_URL}/logout`, { withCredentials: true });
      setIsAuthenticated(false);
    } catch (err) {
      // ignore
    }
  };

  return (
    <AuthContext.Provider value={{ register, login, logout, authError, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
