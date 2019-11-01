import React from 'react';
import { Route, Redirect, } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route {...rest} render={(props) => (
        isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={`${process.env.PUBLIC_URL}/github-login`} />
    )} />
)

export default ProtectedRoute;