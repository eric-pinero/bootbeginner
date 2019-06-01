import { connect } from "react-redux";
import { signup, login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const msp = (state) => {
    let errors;
    if (state.errors.session.length === 0){
        errors = []
    } else {
        errors = state.errors.session.responseJSON
    }
    return {
        errors,
        formType: 'signup'
    };
};


const mdp = (dispatch) => {
    return {
        processForm: (user) => dispatch(signup(user)),
        demoLogin: (demo) => dispatch(login(demo)),

    };
};

export default connect(msp, mdp)(SessionForm)