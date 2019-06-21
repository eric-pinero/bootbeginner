import { connect } from "react-redux";
import Dropdown from './dropdown';

const msp = (state) => {
    const currentUserId = state.session.id;
    const currentUser = state.entities.users[currentUserId]
    const projects = currentUser.user_projects.map((project) => project)
    return {
        currentUser,
        projects,
    }
}


// const mdp = (dispatch) => {
//     return {
//         requestUser: (userId) => dispatch(requestUser(userId)),
//         receiveErrors: (errors) => dispatch(receiveErrors(errors)),
//     };
// };


export default connect(msp)(Dropdown);
