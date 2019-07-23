import { connect } from 'react-redux';
import SearchResults from './search_results';
import { requestProjects, searchProjects } from '../../actions/project_actions';
import { requestCategories } from '../../actions/category_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
    const categories = Object.values(state.entities.categories);
    const criteria = ownProps.match.params.criteria;
    const projects = Object.values(state.entities.projects);
    debugger
    return {
        categories,
        criteria,
        projects: Object.values(state.entities.projects),
    };
};

const mdp = (dispatch) => {
    return {
        requestProjects: () => dispatch(requestProjects()),
        searchProjects: (criteria) => dispatch(searchProjects(criteria)),
        requestCategories: () => dispatch(requestCategories()),
    };
};

export default withRouter(connect(msp, mdp)(SearchResults));