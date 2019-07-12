import { connect } from 'react-redux';
import Index from './index';
import { requestProjects} from '../../actions/project_actions';

const msp = (state) => {
    const projects = Object.values(state.entities.projects);
    const categories = Object.values(state.entities.categories);
    return {
        projects,
        // categories
    };
};

const mdp = (dispatch) => {
    return {
        requestProjects: () => dispatch(requestProjects()),
    };
};

export default connect(msp, mdp)(Index);