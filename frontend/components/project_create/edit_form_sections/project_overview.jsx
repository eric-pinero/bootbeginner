import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../navbar/navbar_container'

class ProjectOverview extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            rules: true,
        }

        this.closeRules = this.closeRules.bind(this);
    }

    closeRules(){
        this.setState({rules: false})
    }

    render(){
        const project = this.props.props.project;
        const projectId = project.id
        const title = project.title ?
            project.title
            :
            `${project.category_name} Project`
        ;
        
        const creatorName= this.props.props.creator.username;    

        const editPath = `projects/${project.id}/edit/`;
            
        let rulebox = this.state.rules ?
            <section className="project-status">
                <h3>Project Status</h3>
                <div className="rules">
                    <ul>
                        <li className="rule-head"><img></img></li>
                        <li className="rule-head"><h2>Take a moment to review our rules</h2></li>
                        <li className="rule-head"><p>Here are five rules every Bootbeginner project must follow.</p></li>
                    </ul>

                    <ol>
                        <li className="rule">Projects must <span className="bold">&nbsp;create something to share&nbsp;</span> with others.</li>                            
                        <li className="rule">Projects must be <span className="bold">&nbsp;honest and clearly presented</span>.</li>                            
                        <li className="rule">Projects can't fundraise for charity.</li>                            
                        <li className="rule">Projects can't offer equity.</li>                            
                        <li className="rule">Projects must involve footwear.</li>                            
                    </ol>

                    <button onClick={this.closeRules} className="green-button">Got it</button>
                </div>
            </section>
            :
            null
        ;


        return(
            <>
            <Navbar/>
            <content className="overview">
                <header className="overview-header">
                    <h1>{title}</h1>
                    <p>by {creatorName}</p>
                    <Link to={`/projects/${project.id}`}>Preview</Link>
                </header>

                <div className="set-margin">

                {rulebox}
                <section className="project-status">
                    <h3>Project overview</h3>
                    <ul className="project-sections">
                        <li className="project-section">
                            <Link to={`/projects/${projectId}/edit/basics`}>Basics</Link>
                            <span>Name your project, upload an image or video, and establish your campaign details.</span>
                        </li>
                        <li className="project-section">
                            <Link to={`/projects/${projectId}/edit/rewards`}>Rewards</Link>
                            <span>Set your rewards and shipping costs.</span>
                        </li>
                        <li className="project-section">
                           <Link to={`/projects/${projectId}/edit/story`}>Story</Link>
                           <span>Add a detailed project description and convey your Risks and Challenges.</span>
                        </li>
                        <li className="project-section">
                            <Link to={`/projects/${projectId}/edit/people`}>People</Link>
                            <span>Edit your Bootbeginner profile.</span>
                        </li>
                    </ul>
                </section>

            </div>

            </content>
            </>
        );
    }
};

export default ProjectOverview;