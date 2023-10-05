import { createContext, useContext, useState } from 'react';

const RegistrationDataContext = createContext();

export const RegistrationDataProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState(null);

  return (
    <RegistrationDataContext.Provider value={{ registrationData, setRegistrationData }}>
      {children}
    </RegistrationDataContext.Provider>
  );
};

export const useRegistrationData = () => {
  const context = useContext(RegistrationDataContext);

  if (!context) {
    throw new Error('useRegistrationData must be used within a RegistrationDataProvider');
  }

  const { registrationData } = context;

  return {
    registrationData,
    fullname: registrationData ? registrationData.fullname : null,
    email: registrationData ? registrationData.email : null,
    phoneNumber: registrationData ? registrationData.phoneNumber : null,
    userId: registrationData ? registrationData.userId : null,
  };
};
