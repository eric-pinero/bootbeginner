import React from 'react';
import {Redirect, withRouter, Route} from 'react-router-dom';
import ProjectOverview from "./edit_form_sections/project_overview";
import ProjectBasics from './edit_form_sections/project_basics';
import ProjectRewards from './edit_form_sections/project_rewards';
import ProjectStory from './edit_form_sections/project_story';
import ProjectPeople from './edit_form_sections/project_people'

class EditProjectForm extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.requestProject(this.props.match.params.projectId);
        this.props.requestUser(this.props.creator.id);
    }

    render(){
        if (this.props.project.id && this.props.currentUserId !== this.props.project.creator_id){
            return <Redirect to="/"/>;
        }
        
        return (
            <content>
                <Route path="/projects/:projectId/edit/overview" component={() => <ProjectOverview props={this.props}/>}/>
                <Route path="/projects/:projectId/edit/basics" component={() => <ProjectBasics next="rewards" props={this.props}/>}/>
                <Route path="/projects/:projectId/edit/rewards"  component={() => <ProjectRewards next="story" props={this.props}/>}/>
                <Route path="/projects/:projectId/edit/story" component={() => <ProjectStory next="people" props={this.props}/>}/>
                <Route path="/projects/:projectId/edit/people" component={() => <ProjectPeople next="people" props={this.props}/>}/>
            </content>
        )
    }
}

export default withRouter(EditProjectForm);
