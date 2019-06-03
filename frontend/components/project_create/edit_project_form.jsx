import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';

class EditProjectForm extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.project;
    }

    componentDidMount(){
        this.props.requestProject(this.props.match.params.projectId);
    }

    render(){
        if (this.state && this.props.currentUserId !== this.state.creator_id){
            return <Redirect to="/"/>;
        }

        return <h1>Edit</h1>
    }
}

export default withRouter(EditProjectForm);
