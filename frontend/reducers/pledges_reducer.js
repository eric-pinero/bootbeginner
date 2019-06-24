import {
    RECEIVE_PLEDGES,
    RECEIVE_PLEDGE,
    REMOVE_PLEDGE,
  } from '../actions/pledge_actions';
  import { merge } from "lodash";

  const PledgesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_PLEDGES:
        let newState = merge({}, state, action.pledges);
        return newState;
  
      case RECEIVE_PLEDGE:
        newState = merge({}, state, {[action.pledge.id]: action.pledge});
        return newState;
  
      case REMOVE_PLEDGE:
        newState = merge({}, state);
        delete newState[action.pledge.id];
        return newState;
    
      default:
        return state;
    }
  };
  
  export default PledgesReducer;
  