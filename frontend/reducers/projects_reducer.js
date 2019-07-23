import {
    RECEIVE_PROJECTS,
    RECEIVE_PROJECT,
    REMOVE_PROJECT,
  } from '../actions/project_actions';
  import { merge } from "lodash";

  const ProjectsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_PROJECTS:
        return action.projects;
  
      case RECEIVE_PROJECT:
        let newState = merge({}, state, {[action.project.id]: action.project});
        return newState;
  
      case REMOVE_PROJECT:
        newState = merge({}, state);
        delete newState[action.projectId];
        return newState;
    
      default:
        return state;
    }
  };
  
  export default ProjectsReducer;
  