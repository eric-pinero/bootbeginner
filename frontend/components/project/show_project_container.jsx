import { connect } from "react-redux";
import { requestProject, updateProject, receiveErrors } from "../../actions/project_actions";
import ShowProject from "./show_project";

const msp = (state, ownProps) => {
    const projectId = ownProps.match.params.projectId;
    const project = state.entities.projects[projectId]
    const creator = state.entities.users[project.creator_id]

    return {
        project,
        creator,
    }
}

const mdp = (dispatch) => {
    return {
        requestProject: (id) => dispatch(requestProject(id)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
        // will need dispatch for reward updates
    };
};

export default connect(msp, mdp)(ShowProject)