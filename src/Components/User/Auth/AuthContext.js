import React, { createContext, useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';

// Create the context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      setIsLoggedIn(true);
      fetchUserData(token);
    }
  }, []);

  const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  };

  const fetchUserData = async (token) => {
    try {
      const decodedToken = jwt.decode(token);
      const username = decodedToken.username;

      const response = await fetch(`http://localhost:5000/app/api/user/${username}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setUser(data);
      } else {
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const login = (token, userInfo) => {
    setIsLoggedIn(true);
    setUser({ ...userInfo, username: userInfo.username });

    const now = new Date();
    now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000); // Expires in 30 days
    //sets the cookie to keep the user logged in
    document.cookie = `token=${token}; expires=${now.toUTCString()}; path=/`;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser({});

    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};