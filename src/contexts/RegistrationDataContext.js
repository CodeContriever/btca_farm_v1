import React, { createContext, useContext, useState } from 'react';

// Create a context for registration data
const RegistrationDataContext = createContext();

// Create a context provider component
export const RegistrationDataProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState(null);

  return (
    <RegistrationDataContext.Provider value={{ registrationData, setRegistrationData }}>
      {children}
    </RegistrationDataContext.Provider>
  );
};

// Custom hook to access registration data
export const useRegistrationData = () => {
  const context = useContext(RegistrationDataContext);
  if (!context) {
    throw new Error('useRegistrationData must be used within a RegistrationDataProvider');
  }
  return context;
};
