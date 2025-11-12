// frontend/src/context/AuthContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Check if user is logged in on app start
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      getUser();
    } else {
      setLoading(false);
    }
  }, []);

  const getUser = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/auth/me');
      setUser(res.data.data);
    } catch (error) {
      localStorage.removeItem('token');
      delete axios.defaults.headers.common['Authorization'];
    } finally {
      setLoading(false);
    }
  };

  // Register user
  const register = async (userData) => {
    try {
      setError('');
      const res = await axios.post('http://localhost:5000/api/auth/register', userData);
      
      if (res.data.success) {
        localStorage.setItem('token', res.data.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.data.token}`;
        setUser(res.data.data);
        return { success: true };
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Registration failed');
      return { success: false, message: error.response?.data?.message };
    }
  };

  // Login user
  const login = async (email, password) => {
    try {
      setError('');
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password
      });
      
      if (res.data.success) {
        localStorage.setItem('token', res.data.data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.data.token}`;
        setUser(res.data.data);
        return { success: true };
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
      return { success: false, message: error.response?.data?.message };
    }
  };

  // Logout user
  const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  const value = {
    user,
    loading,
    error,
    register,
    login,
    logout,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};