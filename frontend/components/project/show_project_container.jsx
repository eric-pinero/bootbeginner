import { connect } from "react-redux";
import { requestProject, updateProject, receiveErrors } from "../../actions/project_actions";
import ShowProject from "./show_project";

const msp = (state, ownProps) => {
    const projectId = ownProps.match.params.projectId;
    const project = state.entities.projects[projectId] ?
        state.entities.projects[projectId]
        :
        {
            id: "",
            title: "",
            subtitle: "",
            creator_id: "",
            category_id: "",
            subcategory_id: "",
            description: "",
            risks: "",
            faqs: "",
            length: "",
            amount_received: "",
            goal: "",
            rewards: "",        
        }
    ;

    const currentUserId = state.session.id;
    const creator = state.entities.users[project.creator_id];

    return {
        project,
        currentUserId,
        creator,
    };
};

const mdp = (dispatch) => {
    return {
        requestProject: (id) => dispatch(requestProject(id)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors)),
        // will need dispatch for project updates
    };
};

export default connect(msp, mdp)(ShowProject);