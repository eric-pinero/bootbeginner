import sessionReducer from "./session_reducer";
import entitiesReducer from "./entities_reducer";
import errorsReducer from "./errors_reducer";
import { combineReducers } from "redux";
import projectsReducer from "./projects_reducer";

const rootReducer = combineReducers(
    {
        session: sessionReducer,
        entities: entitiesReducer,
        errors: errorsReducer,
        projects: projectsReducer,
    }
);

export default rootReducer;