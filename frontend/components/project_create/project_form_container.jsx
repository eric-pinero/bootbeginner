import { connect } from "react-redux";
import { createProject, receiveErrors } from "../../actions/project_actions"
import ProjectForm from "./project_form";

const msp = (state) => {
    const loggedIn = !!state.session
    return {
        loggedIn,
    };
};

const mdp = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    };
};

export default connect(msp,mdp)(ProjectForm)