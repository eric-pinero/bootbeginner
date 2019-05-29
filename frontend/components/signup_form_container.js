import { connect } from "react-redux";
import { signup } from "../actions/session_actions";
import SessionForm from "./session_form";

const msp = (state) => {
    const errors = state.errors;
    return {
        errors,
        formType: 'signup'
    };
};


const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user))
    };
};

export default connect(msp, mdp)(SessionForm);