import { connect } from 'react-redux';
import SearchResults from './search_results';
import { requestProjects } from '../../actions/project_actions';
import { requestCategories } from '../../actions/category_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    const projects = Object.values(state.entities.projects);
    const categories = Object.values(state.entities.categories);
    const criteria = ownProps.match.params.criteria;
    return {
        projects,
        categories,
        criteria
    };
};

const mdp = (dispatch) => {
    return {
        requestProjects: () => dispatch(requestProjects()),
        requestCategories: () => dispatch(requestCategories()),
    };
};

export default withRouter(connect(msp, mdp)(SearchResults));