import { connect } from "react-redux";
import { requestCategories, receiveErrors } from "../../actions/category_actions";
import CategoriesSideBar from "./categories_sidebar";

const msp = (state) => {
    const categories = Object.values(state.entities.categories);

    return {
        categories,
    };
};

const mdp = (dispatch) => {
    return {
        requestCategories: () => dispatch(requestCategories()),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    };
};

export default connect(msp, mdp)(CategoriesSideBar);