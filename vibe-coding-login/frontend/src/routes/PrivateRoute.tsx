import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// Props for PrivateRoute component
interface PrivateRouteProps {
  component: React.ComponentType<any>;
  isAuthenticated: boolean;
  [rest: string]: any; // Allow additional props
}

// PrivateRoute component
const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" /> // Redirect to login if not authenticated
        )
      }
    />
  );
};

export default PrivateRoute;