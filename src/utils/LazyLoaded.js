import React from "react";
export const NavBar = React.lazy(() => import("../components/Navbar/Navbar"));
export const Home = React.lazy(() => import("../containers/Home/Home"));
export const Contact = React.lazy(() => import("../containers/Home/Contact"));
export const Login = React.lazy(() => import("../containers/Login/index"));
export const Signup = React.lazy(() => import("../containers/Signup/index"));

export const NotFound = React.lazy(() =>
  import("../components/NotFound/NotFound")
);
