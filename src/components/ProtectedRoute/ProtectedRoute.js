import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ children, ...props }) => {
    // if (props.isLoggedIn === null) {
    //     return <h2>Загрузка...</h2>;
    // }

    if (props.isLoggedIn !== true) {
        return <Redirect to='/' />;
    }

    return <Route>{children}</Route>;
};

export default ProtectedRoute;
