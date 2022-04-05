import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, ...props }) => {
    return (
        <Route exact={props.exact} path={props.path}>
            {() => (props.isLoggedIn === true ? children : <Redirect to='./' />)}
        </Route>
    );
};

export default ProtectedRoute;
