import { connect } from "react-redux";
import { createProject, receiveErrors } from "../../actions/project_actions";
import ProjectForm from "./project_form";

const msp = (state) => {
    const loggedIn = !!state.session.id;
    let errors;

    if (Array.isArray(state.errors.session)){
        errors = state.errors.session;
    } else {
        
        errors = state.errors.session.responseJSON;
    }

    return {
        loggedIn,
        errors,
    };
};

const mdp = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    };
};

export default connect(msp,mdp)(ProjectForm);