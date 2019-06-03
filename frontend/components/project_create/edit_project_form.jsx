import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';
import ProjectOverview from "./edit_form_sections/project_overview";

class EditProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            section: <ProjectOverview project={this.props.project}/>,
        };
    }

    componentDidMount(){
        this.props.requestProject(this.props.match.params.projectId);
    }

    render(){
        debugger

        if (this.props.project.id && this.props.currentUserId !== this.props.project.creator_id){
            return <Redirect to="/"/>;
        }


        let view = this.state.section;


        debugger
        return (
            <content>
                {this.state.section}
            </content>
        )
    }
}

export default withRouter(EditProjectForm);
