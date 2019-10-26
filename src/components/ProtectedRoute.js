import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        props.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

export default ProtectedRoute;