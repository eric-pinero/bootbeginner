import { connect } from "react-redux";
import { requestProject, updateProject, receiveErrors } from "../../actions/project_actions";
import EditProjectForm from "./project_form";

const msp = (state) => {
    return {
        loggedIn,
    };
};

const mdp = (dispatch) => {
    return {
        requestProject: (id) => dispatch(requestProject(id)),
        updateProject: (project) => dispatch(updateProject(project)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    };
};

export default connect(null,mdp)(EditProjectForm);