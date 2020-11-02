import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const AppRoutes = ({ component: Component, path, isPrivate, ...others }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const shouldRedirect = isPrivate && !isLoggedIn;
    return (
        <Route
            path={path}
            render={props => shouldRedirect ? (<Redirect to={{ pathname: '/login' }} />) : (<Component {...props} />)
            }
        ></Route>
    )
}

export default AppRoutes;
