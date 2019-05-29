import {Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const Auth = ({component: Component, path, loggedIn, exact}) => {
    return (
        <Route path={path} exact={exact} render={(props) => {
            return (
                !loggedIn ? (
                    <Component {...props} />
                ) : (
                    <Redirect tp="/" />
                )
            )
        }
        }/>
    )
}

const msp = state => {
    return {loggedIn: Boolean(state.session.id)}
}

export const AuthRoute = withRouter(connect(msp, null)(Auth))