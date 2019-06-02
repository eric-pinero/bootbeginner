import { connect } from "react-redux";
import ProjectForm from "./project_form";

const msp = (state) => {
    const loggedIn = !!state.session
    return {
        loggedIn
    }
}

const mdp = (dispatch) => {
    return {}
}

export default connect(msp,mdp)(ProjectForm)