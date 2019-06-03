import {
    RECEIVE_PROJECTS,
    RECEIVE_PROJECT,
    REMOVE_PROJECT,
  } from '../actions/project_actions';
  import { merge } from "lodash";

  const ProjectsReducer = (state = {}, action) => {
    debugger
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_PROJECTS:
        let newState = merge({}, state, action.projects);
        return newState;
  
      case RECEIVE_PROJECT:
        debugger
        newState = merge({}, state, {[action.project.id]: action.project});
        return newState;
  
      case REMOVE_PROJECT:
        newState = merge({}, state);
        delete newState[action.project];
        return newState;
    
      default:
        return state;
    }
  };
  
  export default ProjectsReducer;
  