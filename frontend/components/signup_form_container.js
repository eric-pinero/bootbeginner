import { connect } from "react-redux";
import { signup } from "../../actions/sessions_actions";
import SessionForm from "./session_form";

const msp = (state, ownProps) => {
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