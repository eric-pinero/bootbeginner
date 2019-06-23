import {
    RECEIVE_REWARDS,
    RECEIVE_REWARD,
    REMOVE_REWARD,
  } from '../actions/reward_actions';
  import { merge } from "lodash";

  const RewardsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_REWARDS:
        let newState = merge({}, state, action.rewards);
        return newState;
  
      case RECEIVE_REWARD:
        newState = merge({}, state, {[action.reward.id]: action.reward});
        return newState;
  
      case REMOVE_REWARD:
        newState = merge({}, state);
        delete newState[action.reward.id];
        return newState;
    
      default:
        return state;
    }
  };
  
  export default RewardsReducer;
  