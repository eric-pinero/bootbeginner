import { connect } from "react-redux";
import { requestProject, updateProject, receiveErrors } from "../../actions/project_actions";
import { requestUser } from "../../actions/user_actions";
import { createReward, deleteReward } from "../../actions/reward_actions";
import EditProjectForm from "./edit_project_form";

const msp = (state, ownProps) => {
    const projectId = ownProps.match.params.projectId;
    const project = state.entities.projects[projectId] ?
    
        state.entities.projects[projectId]
        :
        {
            id: "",
            title: "",
            subtitle: "",
            creator_id: "",
            category_id: "",
            subcategory_id: "",
            description: "",
            risks: "",
            faqs: "",
            length: "",
            amount_received: "",
            goal: "",        
        }
    ;

    const currentUserId = state.session.id;
    const creator = state.entities.users[project.creator_id] ?
        state.entities.users[project.creator_id]
        :
        {
            id: "",
            username: "",
            email: "",
        }
    ;

    return {
        project,
        currentUserId,
        creator,
    };
};

const mdp = (dispatch) => {
    return {
        requestUser: (id) => dispatch(requestUser(id)),
        requestProject: (id) => dispatch(requestProject(id)),
        updateProject: (project) => dispatch(updateProject(project)),
        createReward: (reward) => dispatch(createReward(reward)),
        deleteReward: (rewardId) => dispatch(deleteReward(reward)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    };
};

export default connect(msp,mdp)(EditProjectForm);