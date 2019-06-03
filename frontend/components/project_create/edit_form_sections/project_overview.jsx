import React from 'react';
import {Link} from 'react-router-dom';

class ProjectOverview extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const project = this.props.project;

        const title = project.title ?
        project.title
        :
        `${project.category_id} Project`
        // figure out how to pull the category name
    ;

        const creatorName= project.creator_id;    
        //figure out how to pull username

        return(
        <content>
            <header>
                <h1>{title}</h1>
                <span>{creatorName}</span>

            </header>
        </content>

        );
    }
};

export default ProjectOverview;;;