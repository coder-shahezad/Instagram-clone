import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../utils/Auth";
import { NavBar } from "./LazyLoaded";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        Auth.isAuth() ? (
          <div>
            <NavBar {...props} />
            <Component {...props} />
          </div>
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
