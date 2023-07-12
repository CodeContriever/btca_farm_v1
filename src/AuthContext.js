// AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (userData) => {
    try {
      const response = await fetch('your_signup_api_url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const newUser = await response.json();
        setUser(newUser);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      throw new Error('An error occurred during sign-up. Please try again later.');
    }
  };

  const signIn = async (userData) => {
    try {
      const response = await fetch('your_signin_api_url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        const authenticatedUser = await response.json();
        setUser(authenticatedUser);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
    } catch (error) {
      throw new Error('An error occurred during sign-in. Please try again later.');
    }
  };

  const signOut = async () => {
    try {
      await fetch('your_signout_api_url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setUser(null);
    } catch (error) {
      throw new Error('An error occurred during sign-out. Please try again later.');
    }
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
