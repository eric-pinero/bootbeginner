import { connect } from "react-redux";
import Dropdown from './dropdown'

const msp = (state) => {
    debugger
    const currentUserId = state.session.id;
    const currentUser = state.entities.users[currentUserId]
    const projects = currentUser.user_projects
    return {
        currentUser,
        projects,
    }
}

export default connect(msp)(Dropdown);
