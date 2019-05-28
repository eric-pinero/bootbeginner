import { connect } from "react-redux";
import { login } from "../../actions/sessions_actions";
import SessionForm from "./session_form";

const msp = (state, ownProps) => {
    const errors = state.errors;
    return {
        errors,
        formType: 'login'
    };
};


const mdp = (dispatch) => {
    return{
        processForm: (user) => dispatch(login(user))
    };
};

export default connect(msp, mdp)(SessionForm);