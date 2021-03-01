import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function PrivateRoute({ children, exact, path }) {
  const { user } = useAuth();
  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact path={path}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
