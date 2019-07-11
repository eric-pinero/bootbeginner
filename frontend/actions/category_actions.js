import * as APIUtil from '../util/pledge_api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCategories = (categories) => {
    return {
        type: RECEIVE_CATEGORIES,
        categories,
    };
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors,
    };
};

export const requestCategories = () => {
    return (dispatch) => {
        return APIUtil.fetchCategories().then(
            (pledges) => dispatch(receiveCategories(pledges)),
            response => dispatch(receiveErrors(response))
        );
    };
};
