import React from 'react';
import Navbar from '../navbar/navbar_container';
import ProjectIndexItem from './project_index_item';
import Footer from '../footer/footer';

class Index extends React.Component{
    componentDidMount(){
        this.props.requestProjects();
    }
    render(){
        const projects = this.props.projects.map(project => {
            return <ProjectIndexItem project={project} key={project.id}/>
        });
        
        debugger
        return (
            <>
            <Navbar/>
            <div className="bottom-grey-border">
                <ul className="category-header small flex">
                    <li>Sneakers</li>
                    <li>Boots</li>
                    <li>Clogs</li>
                    <li>Flats</li>
                    <li>Heels</li>
                    <li>Loafers</li>
                </ul>
            </div>
            <div>
                <div className="featured">
                    <h3>FEATURED</h3>
                    <img></img>
                </div>
                <ul className="recommended">
                    <h3>RECOMMENDED</h3>
                    {projects}
                </ul>
            </div>
            <Footer/>
            </>
        )
    }
}

export default Index;


