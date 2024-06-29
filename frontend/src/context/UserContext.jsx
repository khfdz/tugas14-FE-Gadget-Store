import React, { createContext, useState, useEffect } from 'react';
import userData from '../DataJson/user.json'; 

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      const isValidUser = userData.users.find(u => u.id === parsedUser.id);
      if (isValidUser) {
        setUser(parsedUser);
      } else {
        localStorage.removeItem('user'); e
      }
    }
  }, []);

  const login = (email, password) => {
    const foundUser = userData.users.find(user => user.email === email && user.password === password);
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser)); 
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
