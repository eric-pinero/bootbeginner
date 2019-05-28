import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER
} from "../actions/sessions_actions";
import {merge} from "lodash";

const sessionReducer = (state = {id: null}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let newState = merge({}, state);
            newState.id = [action.user.id];

            return newState;

        case LOGOUT_CURRENT_USER:
            newState = merge({}, state);
            newState.id = null;

            return newState;
            
        default:
            return state;
    }
};

export default sessionReducer;