import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={isAuthenticated() ? <Component /> : <Navigate to="/signin" replace />}
    />
  );
};

export default PrivateRoute;
