import { connect } from "react-redux";
import {logout} from '../../actions/session_actions';

const msp = (state) => {
    const projects = Object.values(state.entities.projects);
    return {
        projects,
    };
};

const mdp = dispatch => {
    return {
        logout: (user) => dispatch(logout(user)),
    };
};


export default connect(msp, mdp)(Dropdown);

