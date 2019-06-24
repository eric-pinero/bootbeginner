import * as APIUtil from '../util/pledge_api_util';

export const RECEIVE_PLEDGES = 'RECEIVE_PLEDGES';
export const RECEIVE_PLEDGE = 'RECEIVE_PLEDGE';
export const REMOVE_PLEDGE = 'REMOVE_PLEDGE';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receivePledges = (pledges) => {
    return {
        type: RECEIVE_PLEDGES,
        pledges,
    };
};

const receivePledge = ({pledge}) => {
    return {
        type: RECEIVE_PLEDGE,
        pledge,
    };
};

const removePledge = (pledgeId) => {
    return {
        type: REMOVE_PLEDGE,
        pledgeId,
    };
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors,
    };
};

export const requestPledges = () => {
    return (dispatch) => {
        return APIUtil.fetchPledges().then(
            (pledges) => dispatch(receivePledges(pledges)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const requestPledge = (pledgeId) => {
    return (dispatch) => {
        return APIUtil.fetchPledge(pledgeId).then(
            (payload) => dispatch(receivePledge(payload)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const createPledge = (pledge) => {
    return (dispatch) => {
        return APIUtil.createPledge(pledge).then(
            (newPledge) => dispatch(receivePledge(newPledge)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const updatePledge = (pledge) => {
    return (dispatch) => {
        return APIUtil.updatePledge(pledge).then(
            (updatedPledge) => dispatch(receivePledge(updatedPledge)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const deletePledge = (pledgeId) => {
    return (dispatch) => {
        return APIUtil.deletePledge(pledgeId).then(
            (removedPledge) => dispatch(removePledge(removedPledge))
        );
    };
};
