import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState('');

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Error logging in');
      setToken(data.token);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    setToken('');
  };

  return (
    <UserContext.Provider value={{ token, handleLogin, handleLogout }}>
      { children }
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
