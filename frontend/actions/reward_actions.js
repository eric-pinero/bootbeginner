import * as APIUtil from '../util/reward_api_util';

export const RECEIVE_REWARDS = 'RECEIVE_REWARDS';
export const RECEIVE_REWARD = 'RECEIVE_REWARD';
export const REMOVE_REWARD = 'REMOVE_REWARD';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveRewards = (rewards) => {
    return {
        type: RECEIVE_REWARDS,
        rewards,
    };
};

const receiveReward = ({reward}) => {
    return {
        type: RECEIVE_REWARD,
        reward,
    };
};

const removeReward = (rewardId) => {
    return {
        type: REMOVE_REWARD,
        rewardId,
    };
};

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors,
    };
};

export const requestRewards = () => {
    return (dispatch) => {
        return APIUtil.fetchRewards().then(
            (rewards) => dispatch(receiveRewards(rewards)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const requestReward = (rewardId) => {
    return (dispatch) => {
        return APIUtil.fetchReward(rewardId).then(
            (payload) => dispatch(receiveReward(payload)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const createReward = (reward) => {
    return (dispatch) => {
        return APIUtil.createReward(reward).then(
            (newReward) => dispatch(receiveReward(newReward)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const updateReward = (reward) => {
    return (dispatch) => {
        return APIUtil.updateReward(reward).then(
            (updatedReward) => dispatch(receiveReward(updatedReward)),
            response => dispatch(receiveErrors(response))
        );
    };
};

export const deleteReward = (rewardId) => {
    return (dispatch) => {
        return APIUtil.deleteReward(rewardId).then(
            (removedReward) => dispatch(removeReward(removedReward))
        );
    };
};
