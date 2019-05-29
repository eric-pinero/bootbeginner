import { connect } from "react-redux";
import { login } from "../actions/session_actions";
import SessionForm from "./session_form";

const msp = (state) => {
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