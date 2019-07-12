import {RECEIVE_CATEGORIES} from '../actions/category_actions';
import { merge } from "lodash";

  const CategoriesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_CATEGORIES:
        let newState = merge({}, state, action.categories);
        return newState;

      default:
        return state;
    }
  };
  
  export default CategoriesReducer;
  