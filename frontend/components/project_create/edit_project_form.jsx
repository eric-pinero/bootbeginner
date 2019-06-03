import React from 'react';
import {Redirect, withRouter} from 'react-router-dom';

class EditProjectForm extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        debugger
        this.props.requestReport(this.props.match.params.projectId);
    }

    render(){
        debugger
        if (currentUserId !== this.props.creator_id){
            return <Redirect to="/"/>;
        }

        return <h1>Edit</h1>
    }
}

export default withRouter(EditProjectForm);
