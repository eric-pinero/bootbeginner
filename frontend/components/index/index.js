import React from 'react';
import Navbar from '../navbar/navbar_container';
import ProjectIndexItem from './project_index_item';

class Index extends React.Component{
    componentDidMount(){
        this.props.requestProjects();
    }
    render(){
        const projects = this.props.projects.map(project => {
            return <ProjectIndexItem project={project} key={project.id}/>
        });

        return (
            <>
            <Navbar/>
            <div>
                <ul>
                    {projects}
                </ul>
            </div>
            </>
        )
    }
}

export default Index;


