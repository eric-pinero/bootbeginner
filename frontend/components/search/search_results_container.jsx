import { connect } from 'react-redux';
import SearchResults from './search_results';
import { requestProjects } from '../../actions/project_actions';
import { requestCategories } from '../../actions/category_actions';

const msp = (state, ownProps) => {
    const projects = Object.values(state.entities.projects);
    const categories = Object.values(state.entities.categories);
    const category = ownProps.match.params.categoryName;
    return {
        projects,
        categories,
        category
    };
};

const mdp = (dispatch) => {
    return {
        requestProjects: () => dispatch(requestProjects()),
        requestCategories: () => dispatch(requestCategories()),
    };
};

export default connect(msp, mdp)(SearchResults);