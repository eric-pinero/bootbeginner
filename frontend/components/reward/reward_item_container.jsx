import { connect } from "react-redux";
import { requestReward, updateReward, receiveErrors } from "../../actions/reward_actions";
import RewardItem from "./reward_item";

const msp = (state, ownProps) => {
    const reward = ownProps.reward;
    const userId = ownProps.userId;
    const projectId = ownProps.projectId;
    return {
        reward,
        userId,
        projectId,
    };
};

const mdp = (dispatch) => {
    return {
        requestReward: (id) => dispatch(requestReward(id)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
        // will need dispatch for reward updates
    };
};

export default connect(msp, mdp)(RewardItem);