import { connect } from "react-redux";
import Dropdown from './dropdown';
import {logout} from '../../actions/session_actions';

const msp = (state) => {
    const currentUserId = state.session.id;
    const currentUser = state.entities.users[currentUserId];
    const projects = currentUser.user_projects.map((project) => project);
    return {
        currentUser,
        projects,
    };
};


const mdp = (dispatch) => {
    return {
        logout: (user) => dispatch(logout(user)),
    };
};


export default connect(msp, mdp)(Dropdown);
