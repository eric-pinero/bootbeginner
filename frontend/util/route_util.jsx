import React from 'react';
import {Route, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact}) => {
    return (
        <Route path={path} exact={exact} render={(props) => {
            return (
                !loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            )
        }
        }/>
    )
}

const msp = state => {
    return {loggedIn: Boolean(state.session.id)}
}

const AuthRoute = withRouter(connect(msp, null)(Auth))

export default AuthRoute;