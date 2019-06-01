import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user,
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors,
});

export const login = (user) => dispatch => {
    return APIUtil.login(user).then( (user) => dispatch(receiveCurrentUser(user)),
        response => dispatch(receiveErrors(response))
    );
};

export const logout = () => dispatch => {
    return APIUtil.logout().then( () => dispatch(logoutCurrentUser()));
};

export const signup = (user) => dispatch => {
    return APIUtil.signup(user).then((user) => dispatch(receiveCurrentUser(user)),
        response => dispatch(receiveErrors(response))        
    );
};