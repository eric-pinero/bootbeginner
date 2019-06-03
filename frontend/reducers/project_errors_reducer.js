import {
    RECEIVE_PROJECTS,
    RECEIVE_PROJECT,
    REMOVE_PROJECT,
    RECEIVE_ERRORS,
  } from '../actions/project_actions';

const projectErrorsReducer = (state = [], action) =>{
    Object.freeze(state);
    let newState;
    switch (action.type) {
        case RECEIVE_ERRORS:
            newState = action.errors;
            return newState;

        case RECEIVE_PROJECTS:
            return [];
        case RECEIVE_PROJECT:
            return [];
        case REMOVE_PROJECT:
            return [];
            
        default:
            return state;
    }
};

export default projectErrorsReducer;