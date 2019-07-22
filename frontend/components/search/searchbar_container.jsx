import { connect } from "react-redux";
import {logout} from '../../actions/session_actions';
import Searchbar from './searchbar';

const msp = (state) => {
    const projects = Object.values(state.entities.projects);
    return {
        projects,
    };
};

// const mdp = dispatch => {
//     return {
        
//     };
// };


export default connect(msp)(Searchbar);

