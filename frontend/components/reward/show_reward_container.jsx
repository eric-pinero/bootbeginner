import { connect } from "react-redux";
import { requestReward, updateReward, receiveErrors } from "../../actions/reward_actions";
import ShowReward from "./show_reward";

const msp = (state, ownProps) => {

    const rewardId = ownProps.match.params.rewardId;
    const reward = state.entities.rewards[rewardId] ?
        state.entities.rewards[rewardId]
        :
        {
            title: "",
            description: "",
            items: "",
            project_id: "",
            minimum_value: "",
            quantity: "",
            start_time: "",
            end_time: "",
        }
    ;

    const currentUserId = state.session.id;
    const creator = state.entities.users[reward.creator_id];
    return {
        reward,
        currentUserId,
    };
}

const mdp = (dispatch) => {
    return {
        requestReward: (id) => dispatch(requestReward(id)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
        // will need dispatch for reward updates
    };
};

export default connect(msp, mdp)(ShowReward);