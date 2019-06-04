import { connect } from "react-redux";
import { requestProject, receiveErrors } from "../../actions/project_actions";
import ShowProject from "./show_project";

const msp = (state, ownProps) => {
    const projectId = ownProps.match.params.projectId;
    const project = state.entities.projects[projectId]

    return {
        project,
    }
}

const mdp = (dispatch) => {
    return {
        requestProject: (id) => dispatch(requestProject(id)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    };
};

export default connect(msp, mdp)(ShowProject)