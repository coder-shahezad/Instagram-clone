import React, { Suspense } from "react";
import { Router, Switch } from "react-router-dom";
import history from "./History";
import * as LazyComponent from "../utils/LazyLoaded";
import Loader from "../components/Loader/Loader";
import PrivateRoute from "../utils/PrivateRoute";
import Navbar from "../components/Navbar/Navbar";
import Auth from "../utils/Auth";

const Routes = (
  <Suspense fallback={<Loader />}>
    <Router history={history}>
      <Switch>
        {/* For private routes */}
        <PrivateRoute component={LazyComponent.Home} path="/" exact />
        <PrivateRoute component={LazyComponent.Contact} path="/contact" exact />
        {/* Public routes that doesn't need any auth */}
        <LazyComponent.Login path="/login" exact />
        <LazyComponent.Signup path="/signup" exact />
        <LazyComponent.NotFound
          path="**"
          title="This page doesn't exist..."
          exact
        />
      </Switch>
    </Router>
  </Suspense>
);

export default Routes;
