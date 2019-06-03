import { connect } from "react-redux";
import { requestProject, updateProject, receiveErrors } from "../../actions/project_actions";
import EditProjectForm from "./edit_project_form";

const msp = (state, ownProps) => {
    debugger
    const projectId = ownProps.match.params.projectId;
    const project = state.entities.projects[projectId];
    const currentUserId = state.session.id;
    return {
        project,
        currentUserId,
    };
};

const mdp = (dispatch) => {
    return {
        requestProject: (id) => dispatch(requestProject(id)),
        updateProject: (project) => dispatch(updateProject(project)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    };
};

export default connect(msp,mdp)(EditProjectForm);