import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/">Preview</Link>
                </header>
                <section>
                    <h3>Project Status</h3>
                    <div className="rules">
                        <ul>
                            <li><img></img></li>
                            <li><h2>Take a moment to review our rules</h2></li>
                            <li><span>Here are five rules every Bootbeginner project must follow.</span></li>
                        </ul>


                        <ol>
                            <li>Projects must <span className="bold">create something to share</span> with others.</li>                            
                            <li>Projects must be <span className="bold">honest and clearly presented</span>.</li>                            
                            <li>Projects can't fundraise for charity.</li>                            
                            <li>Projects can't offer equity.</li>                            
                            <li>Projects must involve footwear.</li>                            
                        </ol>

                        <button>Got it</button>
                    </div>

                </section>

                <section>
                    <h3>Project overview</h3>
                    <ul>
                        <li className="project-section">
                            <Link project={this.props.project} to="/">Basics</Link>
                            <span>Name your project, upload an image or video, and establish your campaign details.</span>
                        </li>
                        <li className="project-section">
                            <Link to="/">Rewards</Link>
                            <span>Set your rewards and shipping costs.</span>
                        </li>
                        <li className="project-section">
                           <Link to="/">Story</Link>
                           <span>Add a detailed project description and convey your Risks and Challenges.</span>
                        </li>
                        <li className="project-section">
                            <Link to="/">People</Link>
                            <span>Edit your Bootbeginner profile and add collaborators.</span>
                        </li>
                        <li className="project-section">
                            <Link to="/">Payment</Link>
                            <span>Confirm your identity and link a bank account.</span>
                        </li>
                    </ul>
                </section>
            </content>

        );
    }
};

export default ProjectOverview;