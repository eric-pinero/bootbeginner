import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';

class EditProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            section: <Main project={this.props.project}/>,
        };
    }

    componentDidMount(){
        this.props.requestProject(this.props.match.params.projectId);
    }

    render(){
        debugger

        const project = this.props.project ? 
            this.props.project
            :
            {}
        ;

        if (this.props.project.id && this.props.currentUserId !== this.state.creator_id){
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
