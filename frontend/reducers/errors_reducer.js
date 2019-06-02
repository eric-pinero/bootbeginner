import sessionErrorsReducer from './session_errors_reducer';
import projectErrorsReducer from './project_errors_reducer';
import { combineReducers } from "redux";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    project: projectErrorsReducer
});

export default errorsReducer;
