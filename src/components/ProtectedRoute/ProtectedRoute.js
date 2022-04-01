import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Preloader from '../Preloader/Preloader';

const ProtectedRoute = ({ children, ...props }) => {
    return (
        <Route exact={props.exact} path={props.path}>
            {() =>
                props.isLoggedIn === true ? (
                    children
                ) : props.isLoggedIn === false ? (
                    <Redirect to='./' />
                ) : (
                    <Redirect to='./' />
                )
            }
        </Route>
    );
};

export default ProtectedRoute;
